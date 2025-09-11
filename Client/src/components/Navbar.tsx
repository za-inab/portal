import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full  justify-between items-center p-4 sm:p-6 sm:px-10 absolute top-0">
      <img
        src={assets.logo}
        className="aspect-square max-w-[80px]"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <button
        className="flex items-center gap-2 border-2 border-amber-300 bg-amber-200 rounded-[30px] p-4 text-amber-600 hover:bg-amber-300"
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
    </div>
  );
}

export default Navbar;
