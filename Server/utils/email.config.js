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