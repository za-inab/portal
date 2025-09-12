import dotenv from "dotenv";
import {
  EMAIL_VERIFY_TEMPLATE,
  PASSWORD_RESET_TEMPLATE,
} from "Server/config/emailTemplates";

dotenv.config();

export const getRegisterEmail = (sender, receiver) => {
  return {
    from: sender,
    to: receiver,
    subject: "Registration Complete",
    text: `Welcome to Zainab's website. Your account has been created with email-id: ${receiver}`,
  };
};

export const getOtpEmail = (sender, receiver, otp) => {
  return {
    from: sender,
    to: receiver,
    subject: "Verify Email",
    // text: `Please enter the following OTP for verification of your email\n ${otp}`,
    html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace(
      "{{email}}",
      receiver
    ),
  };
};

export const getPasswordOtpEmail = (receiver, otp) => {
  return {
    from: process.env.SMTP_USER,
    to: receiver,
    subject: "Reset Password",
    // text: `Please enter the following OTP for resetting password\n ${otp}`,
    html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace(
      "{{email}}",
      receiver
    ),
  };
};
