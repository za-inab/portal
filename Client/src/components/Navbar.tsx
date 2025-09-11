import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const beUrl = import.meta.env.VITE_BASE_URL;
  const { userData, setUserData, setIsLoggedIn } = useContext(AppContext);

  const verifyEmail = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${beUrl}/api/auth/send-verify-otp`);
      if (data.success) {
        navigate("/verify-email");
        toast.success(data.message);
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${beUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-row w-full  justify-between items-center px-4 sm:px-10 absolute top-0">
      <img
        src={assets.logo}
        className="aspect-square max-w-[80px]"
        alt="logo"
        onClick={() => navigate("/")}
      />
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-amber-950 text-amber-50 relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-amber-100 rounded-2xl pt-10">
            <ul className="list-none m-0 p-2 bg-amber-900 text-sm rounded-sm">
              {!userData.isAccountVerified && (
                <li
                  className="px-2 py-1 hover:bg-amber-200 hover:text-amber-900 rounded-sm"
                  onClick={() => verifyEmail()}
                >
                  Verify Email
                </li>
              )}
              <li
                className="px-2 py-1 hover:bg-amber-200 hover:text-amber-900 pr-10 rounded-sm"
                onClick={() => logout()}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          className="flex items-center gap-2 border-2 border-amber-700 bg-amber-200 rounded-full px-5 py-3 text-amber-700 hover:bg-amber-700 hover:text-amber-200"
          onClick={() => navigate("/login")}
        >
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Navbar;
