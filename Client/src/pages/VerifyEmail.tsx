import axios from "axios";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { submitEmailVerifyOtp } from "../utilities/nextworkRequest";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function VerifyEmail() {
  const inputRefs = React.useRef([]);
  const navigate = useNavigate();
  const { userData, isLoggedIn } = useContext(AppContext);
  console.log("userData: ", userData);

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
      const otpArray = inputRefs.current.map((block) => block.value);

      const otp = otpArray.join("");
      const { data } = await submitEmailVerifyOtp(otp);
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else toast.error(data.message);
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
          Enter Verification OTP
        </h1>
        <p className="text-center mb-6">
          Enter the 6-digit code sent to your email.
        </p>
        <form onSubmit={onSubmitHandler}>
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
          <button
            className="w-full py-2.5 rounded-full border-2 border-amber-100 hover:bg-amber-100 hover:text-amber-700 transition-all font-semibold"
            type="submit"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
