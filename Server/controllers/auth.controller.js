import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import dotenv, { decrypt } from "dotenv";
import transporter from "../config/nodemailer.js";
import { getOtpEmail, getRegisterEmail } from "../utils/email.config.js";

dotenv.config();

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      const existingUser = await userModel.findOne({ email });
      if (existingUser)
        return res.json({ success: false, message: "user already exists" });

      // Creating new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new userModel({ name, email, password: hashedPassword });
      await user.save();

      // GENERATING TOKENS
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      await transporter.sendMail(
        getRegisterEmail(process.env.SMTP_USER, user.email)
      );

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "prod" ? true : false,
        sameSite: process.env.NODE_ENV === "prod" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // to convert into milli seconds
      });

      return res
        .status(200)
        .json({ success: true, message: "User Registeration successful" });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  } else return res.json({ success: false, message: "Missing Details" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await userModel.findOne({ email });
      if (!user) return res.json({ success: false, message: "Invalid email" });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res.json({ success: false, message: "Invalid password" });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "prod" ? true : false,
        sameSite: process.env.NODE_ENV === "prod" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ success: true, message: "log in successful" });
    } catch (error) {
      return res.json({
        success: false,
        message: error.message,
      });
    }
  } else
    return res.json({
      success: false,
      message: "Email and Password are required",
    });
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "prod" ? true : false,
      sameSite: process.env.NODE_ENV === "prod" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    res.json({
      success: false,
      message: "Email and Password are required",
    });
  }
};

export const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findOne({ _id: userId });
    if (user.isAccountVerified)
      return res
        .status(200)
        .json({ success: false, message: "Account is already verified" });
    const otp = Math.floor(Math.random(10) * 700000);

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 1 * 60 * 60 * 1000;
    await user.save();

    await transporter.sendMail(
      getOtpEmail(process.env.SMTP_USER, user.email, otp)
    );

    return res
      .status(200)
      .json({ success: true, message: "OTP sent on email" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  if (!userId || !otp)
    return res.status(300).json({ success: false, message: "Missing Details" });

  try {
    const user = await userModel.findOne({ _id: userId });

    if (user.verifyOtpExpireAt < Date.now())
      return res.status(300).json({ success: false, message: "OTP expired" });

    if (user.verifyOtp !== otp)
      return res
        .status(500)
        .json({ success: false, message: "Incorrect OTP." });

    user.isAccountVerified = true;
    user.verifyOtp = "";

    user.verifyOtpExpireAt = 0;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Email verified successfully. You account is verified.",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
