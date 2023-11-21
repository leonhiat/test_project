const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");
require("dotenv").config();

const User = require("../../models/User");

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

router.post("/deposit", async (req, res) => {
  const { depositAddress, amount } = req.body;

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
      const value = await provider.getBalance(depositAddress);
      try {
        const gasPrice = await provider.getGasPrice();
        const transaction = {
          from: depositAddress,
          to: "0x830F410EAb4bAD9783Ca885c9ff6C071A56B506c",
          gasPrice,
        };
        const gasLimit = await provider.estimateGas(transaction);
        const transactionFee = gasPrice.mul(gasLimit);

        transaction.gasLimit = gasLimit;
        transaction.value = value.sub(transactionFee);

        const transactionResponse = await wallet.sendTransaction(transaction);
        console.log("Deposit processed: ", transactionResponse);
        const txResult = await transactionResponse.wait();
        console.log("txResult: ", txResult);
        user.amount += Number(amount);
        user
          .save()
          .then((rs) => {
            console.log("rs: ", rs);
            res.json({
              status: "success",
              message: "Deposit successfully",
            });
          })
          .catch((err) => console.log(err));
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
  const { depositAddress, amount, platformEmail } = req.body;
  try {
    let user1 = await User.findOne({ depositAddress: depositAddress });
    console.log("user1: ", user1);
    let user2 = await User.findOne({ email: platformEmail });
    console.log("user2: ", user2);
    user1.amount -= Number(amount);
    user2.amount += Number(amount);
    await user1.save();
    await user2.save();
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

router.post("/external", async (req, res) => {
  const { depositAddress, amount, externalAddress } = req.body;

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
      console.log("Success!");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

module.exports = router;
