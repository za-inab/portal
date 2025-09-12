import axios from "axios";

const baseUrl: string = import.meta.env.VITE_BASE_URL;
const authUrl: string = "/api/auth";
const userUrl: string = "/api/user";

export const login = async (email: string, password: string) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}${authUrl}/login`, { email, password });
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}${authUrl}/register`, {
    name,
    email,
    password,
  });
};

export const submitEmailVerifyOtp = async (otp: string) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}${authUrl}/verify-email`, { otp });
};

export const getResetPasswordOtp = async (email: string) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}${authUrl}/send-password-reset-otp`, {
    email,
  });
};

export const resetPassword = async (
  email: string,
  otp: string,
  password: string
) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}${authUrl}/reset-password`, {
    email,
    otp,
    password,
  });
};
