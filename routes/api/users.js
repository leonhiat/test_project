const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

    const newUser = new User({ email, password });

    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    const payload = { id: newUser.id };

    jwt.sign(
      payload,
      process.env.secretKey,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          status: "success",
          message: `Hello ${newUser.email}, Happy ${currentWeekDay}`,
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

module.exports = router;
