import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyOtp: {
      type: String,
      defaut: "",
    },
    verifyOtpExpireAt: {
      type: Number,
      defaut: 0,
    },
    isAccountVerified: {
      type: Boolean,
      defaut: false,
    },
    resetOtp:{
        type:String,
        default:''
    },
    resetOtpExpireAt:{
        type:Number,
        default:''
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.models.user ||  mongoose.model("user", userSchema);
