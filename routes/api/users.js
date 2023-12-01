const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");
require("dotenv").config();
const {
  usdtContractABI,
  usdtContractAddress,
} = require("../../client/src/components/constants/usdtContractABI");
const {
  mainWalletPublicKey,
  mainWalletPrivateKey,
} = require("../../client/src/components/constants/mainWallet");

const User = require("../../models/User");
const History = require("../../models/History");

const router = express.Router();

const today = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentWeekDay = weekDays[today.getDay()];

const generateDeposit = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    depositAddress: wallet.address,
    privateKey: wallet.privateKey,
  };
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ status: "error", message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ status: "error", message: "Wrong password" });
    const payload = { id: user.id, depositAddress: user.depositAddress };
    jwt.sign(
      payload,
      process.env.secretKey,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          status: "success",
          message: `Hello ${user.email}, Happy ${currentWeekDay}`,
          token,
        });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res.json({ status: "error", message: "This email already used" });
    const getDeposit = await generateDeposit();
    const newUser = new User({
      email,
      password,
      depositAddress: getDeposit.depositAddress,
      privateKey: getDeposit.privateKey,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save().then(() => {
      res.json({
        status: "success",
        message: `Hello ${newUser.email}, Happy ${currentWeekDay}`,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

const sendETH = async (provider, wallet, depositAddress) => {
  const value = await provider.getBalance(depositAddress);
  const gasPrice = await provider.getGasPrice();
  const transaction = {
    from: depositAddress,
    to: mainWalletPublicKey,
    gasPrice,
  };
  const gasLimit = await provider.estimateGas(transaction);
  const transactionFee = gasPrice.mul(gasLimit);
  transaction.gasLimit = gasLimit;
  transaction.value = value.sub(transactionFee);
  const result = await wallet.sendTransaction(transaction);
  await result.wait();
  console.log("transactionResponsive: ", result);
  return result;
};

const sendUSDT = async (provider, wallet, depositAddress) => {
  const usdtContract = new ethers.Contract(
    usdtContractAddress,
    usdtContractABI.result,
    wallet
  );
  const value = await usdtContract.balanceOf(depositAddress);
  console.log("value: ", value);
  const gasEstimation = await usdtContract.estimateGas.transfer(
    mainWalletPublicKey,
    value
  );
  const gasPriceForUSDT = ethers.utils.parseUnits("20", "gwei"); //convert gas price for wei
  const totalFeeWei = gasPriceForUSDT.mul(gasEstimation); // calculate total fee wei
  const feeToEth = ethers.utils.formatEther(totalFeeWei); // calculate total fee wei to eth
  console.log("feeToETH: ", feeToEth);

  const walletForEth = new ethers.Wallet(mainWalletPrivateKey, provider);
  const bigNumberFeeToEth = ethers.utils.parseEther(feeToEth.toString());
  const gasPriceForEth = await provider.getGasPrice();
  const transaction = {
    from: mainWalletPublicKey,
    to: depositAddress,
    gasPrice: gasPriceForEth,
  };
  const gasLimit = await provider.estimateGas(transaction);
  const transactionFee = gasPriceForEth.mul(gasLimit);
  transaction.gasLimit = gasLimit;
  transaction.value = bigNumberFeeToEth.add(transactionFee);
  const transactionForEth = await walletForEth.sendTransaction(transaction);
  await transactionForEth.wait();
  console.log("transactionForEth: ", transactionForEth);

  const result = await usdtContract.transfer(mainWalletPublicKey, value);
  await result.wait();
  return result;
};

router.post("/deposit", async (req, res) => {
  const { userId, from, amount, depositAddress, coin } = req.body;

  try {
    let user = await User.findOne({ depositAddress: depositAddress });

    if (!user) {
      return res.json({
        status: "error",
        message: "Deposit address not found",
      });
    }

    const provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/61b81860675b403eb813bd27b049a1bc"
    );

    const wallet = new ethers.Wallet(user.privateKey, provider);

    while (true) {
      try {
        let result;

        // Check the coin type
        if (coin === "ETH") {
          result = await sendETH(provider, wallet, depositAddress);
          user.eth += Number(amount);
        } else if (coin === "USDT") {
          result = await sendUSDT(provider, wallet, depositAddress);
          await sendETH(provider, wallet, depositAddress);
          user.usdt += Number(amount);
        } else {
          return res.json({
            status: "error",
            message: "Invalid coin type",
          });
        }

        const ur = await user.save();
        console.log("ur: ", ur);
        const newHistory = new History({
          user: userId,
          method: "Deposit",
          from,
          amount: `${amount} ${coin}`,
        });
        console.log(newHistory);
        await newHistory.save();
        res.json({
          status: "success",
          message: "Deposit successfully",
        });
        break;
      } catch (error) {
        console.log(error.message);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

router.post("/platforms", async (req, res) => {
  const { user, depositAddress, amount, platformEmail } = req.body;
  try {
    let user1 = await User.findOne({ depositAddress: depositAddress });
    console.log("user1: ", user1);
    let user2 = await User.findOne({ email: platformEmail });
    console.log("user2: ", user2);
    user1.eth -= Number(amount);
    user2.eth += Number(amount);
    await user1.save();
    await user2.save();
    const newHistory = new History({
      user,
      method: "Transfer",
      from: depositAddress,
      to: user2.depositAddress,
      amount: amount,
    });
    await newHistory.save();
    res.json({
      status: "success",
      message: "Deposit successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

router.post("/external", async (req, res) => {
  const { user, amount, externalAddress } = req.body;

  const provider = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/61b81860675b403eb813bd27b049a1bc"
  );

  const wallet = new ethers.Wallet(
    "9bd36188e62853bbbeed52571765e29ab842f0c62365bc940cd435419a1a75c8",
    provider
  );
  const value = ethers.utils.parseEther(amount);

  const transaction = {
    from: "0x830F410EAb4bAD9783Ca885c9ff6C071A56B506c",
    to: externalAddress,
    value: value,
  };

  wallet
    .sendTransaction(transaction)
    .then((transaction) => {
      const newHistory = new History({
        user,
        method: "Withdraw",
        to: externalAddress,
        eth: amount,
      });
      newHistory.save();
      console.log("Success!");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

router.post("/history/:userId", (req, res) => {
  History.find({ user: req.params.userId })
    .sort({ createdAt: -1 })
    .then((rs) => res.json(rs))
    .catch((err) => console.log(err));
});

module.exports = router;
