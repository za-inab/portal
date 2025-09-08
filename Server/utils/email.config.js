import dotenv from 'dotenv';

dotenv.config()

export const getRegisterEmail=(sender,receiver)=>{
    return{
    "from": sender,
    "to": receiver,
    "subject": "Registration Complete",
    "text": `Welcome to Zainab's website. Your account has been created with email-id: ${receiver}`
    }
    
  }

  export const getOtpEmail = (sender, receiver, Otp) => {
    return {
      from: sender,
      to: receiver,
      subject: "Verify Email",
      text: `Please enter the following OTP for verification of your email\n ${Otp}`,
    };
  };