import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import Password from "antd/es/input/Password";

function ResetPassword() {
  const inputRefs = React.useRef([]);
  const navigate = useNavigate();
  const { userData, isLoggedIn } = useContext(AppContext);
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1)
      inputRefs.current[index + 1].focus();
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasterArray = paste.split("");
    pasterArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (otpSent) {
        const otpArray = inputRefs.current.map((block) => block.value);
        const otp = otpArray.join("");
        const { data } = await resetPassword(otp, Password);
        if (data.success) {
          toast.success(data.message);
          navigate("/");
        } else toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerified && navigate("/");
  }, [userData, isLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-amber-700 p-10 rounded-lg shadow-lg shadow-amber-900 w-full sm:w-96 text-amber-200 text-sm">
        <h1 className=" text-center font-semibold text-2xl">
          {otpSent ? "Enter OTP to Reset Password" : "Get OTP"}
        </h1>
        <p className="text-center mb-6">
          {otpSent
            ? "Enter the 6-digit code sent to your email."
            : "Get 6-digit otp on your email."}
        </p>
        <form onSubmit={onSubmitHandler}>
          {otpSent && (
            <div>
              <div className="flex justify-between mb-6">
                {Array(6)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <input
                        type="text"
                        maxLength={1}
                        key={index}
                        required
                        className="w-12 aspect-square bg-amber-100 text-amber-900 text-center text-xl rounded-md"
                        ref={(e) => (inputRefs.current[index] = e)}
                        onInput={(e) => handleInput(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={(e) => handlePaste(e)}
                      />
                    );
                  })}
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
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New password"
                  className="outline-none"
                />
              </div>
            </div>
          )}

          {!otpSent && (
            <div>
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
                  name="email"
                  value={email}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your email"
                  className="outline-none"
                />
              </div>
            </div>
          )}

          <button
            className="w-full py-2.5 rounded-full border-2 border-amber-100 hover:bg-amber-100 hover:text-amber-700 transition-all font-semibold"
            type="submit"
          >
            {otpSent ? "Reset Password" : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
