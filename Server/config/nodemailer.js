import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export default transporter;