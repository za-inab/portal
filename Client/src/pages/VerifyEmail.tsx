import React from "react";

function VerifyEmail() {
  const inputRefs = React.useRef([]);
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1)
      inputRefs.current[index + 1].focus();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-amber-700 p-10 rounded-lg shadow-lg shadow-amber-900 w-full sm:w-96 text-amber-200 text-sm">
        <h1 className=" text-center font-semibold text-2xl">
          Enter Verification OTP
        </h1>
        <p className="text-center mb-6">
          Enter the 6-digit code sent to your email.
        </p>
        <form>
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
