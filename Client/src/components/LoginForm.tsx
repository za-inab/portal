import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Button, Checkbox, Form, Input } from "antd";

// type Props = {}
// props: Props
function LoginForm() {
  const [page, setPage] = useState("Sign-up");

  const changeHandler = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6  ">
      <div className="bg-amber-700 p-10 rounded-lg shadow-lg shadow-amber-900 w-full sm:w-96 text-amber-200 text-sm">
        <h2 className="text-3xl font-semibold text-center mb-3">
          {page === "Sign-up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-sm mb-4">
          {page === "Sign-up"
            ? "Create Your Account"
            : "Login to your account!"}
        </p>
        <form className="my-2.5">
          {page === "Sign-up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-amber-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <input
                className="bg-transparent outline-none text-amber-200"
                name="name"
                onChange={changeHandler}
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-amber-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              className="bg-transparent outline-none text-amber-200"
              name="email"
              onChange={changeHandler}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-amber-200 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              className="bg-transparent outline-none text-amber-200"
              name="password"
              onChange={changeHandler}
              placeholder="Enter your password"
            />
          </div>
          <p className="mb-4 text-amber-300 cursor-pointer">Forgot password?</p>
          <button className="w-full py-2.5 rounded-full border-2 border-amber-400 hover:bg-amber-400 hover:text-amber-700 transition-all font-semibold">
            {page === "Sign-up" ? "Sign Up" : "Login"}{" "}
          </button>
        </form>
        <p className="text-amber-300">
          {page === "Sign-up"
            ? "Already have an accound ?"
            : "Don't have an account"}{" "}
          <span
            className="underline hover:cursor-pointer hover:text-amber-50"
            onClick={() => {
              setPage(page === "Sign-up" ? "Login" : "Sign-up");
            }}
          >
            {page === "Sign-up" ? "Login here" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
