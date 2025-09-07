import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "Server/models/user.model.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (name & email & password) {
    try {
      const existingUser = await userModel.findOne({ email });
      if (existingUser)
        return res.json({ success: false, message: "user already exists" });

      const hashedPassword = await bcrypt.hash(password, "I am a hacker");
      const user = new userModel({ name, email, password });
      return res.json({ success: true });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  }

  return res.json({ success: false, message: "Missing Details" });
};
