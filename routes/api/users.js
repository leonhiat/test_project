const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ethers = require("ethers");
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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.json({ status: "error", message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.json({ status: "error", message: "Wrong password" });

    const payload = { id: user.id };

    jwt.sign(
      payload,
      process.env.secretKey,
      { expiresIn: 30 },
      (err, token) => {
        if (err) throw err;
        res.json({
          status: "success",
          message: `Hello ${user.email}, Happy ${currentWeekDay}`,
          depositAddress: user.depositAddress,
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
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
      return res.json({
        status: "error",
        message: "This email is already in use",
      });

    // Create a new Ethereum wallet
    const wallet = ethers.Wallet.createRandom();
    const depositAddress = wallet.address;
    const privateKey = wallet.privateKey;

    const newUser = new User({ email, password, depositAddress, privateKey });

    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(password, salt);

    const provider = ethers.getDefaultProvider("https://mainnet.infura.io/v3/61b81860675b403eb813bd27b049a1bc");
    
    const balance = await provider.getBalance(depositAddress);

    if (balance == null) {
      throw new Error("Failed to retrieve balance"); // Handle the inability to retrieve balance
    }

    newUser.balance = ethers.utils.formatEther(balance); // Store the balance in the user document

    await newUser.save();

    const payload = { id: newUser.id };

    jwt.sign(
      payload,
      process.env.secretKey,
      { expiresIn: 30 },
      (err, token) => {
        if (err) throw err;
        res.json({
          status: "success",
          message: `Hello ${newUser.email}, Happy ${currentWeekDay}`,
          depositAddress: newUser.depositAddress,
          token,
        });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.json({
      status: "error",
      message: `Internal Server Error: ${error.message}`,
    });
  }
});

module.exports = router;
