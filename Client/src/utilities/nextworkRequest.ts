import axios from "axios";


const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const login = async (email: string, password: string) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}/api/auth/login`, { email, password });
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  axios.defaults.withCredentials = true;
  return await axios.post(`${baseUrl}/api/auth/register`, {
    name,
    email,
    password,
  });
};