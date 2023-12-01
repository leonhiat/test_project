const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    depositAddress: { type: String, required: true },
    privateKey: { type: String, required: true },
    eth: { type: Number, default: 0 },
    usdt: { type: Number, default: 0 },
    usdc: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
