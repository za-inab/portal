import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

type HeaderProps = {
  name?: string;
};

export default function Header(props: HeaderProps) {
  const { name = "Developer" } = props;

  const { userData, getAuthState } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      await getAuthState();
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-amber-900">
      <img
        src={assets.header_img}
        alt={"Welcome image"}
        className="w-36 h-36 rounded-full mb-6"
      />
      <h1 className="flex flex-row items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
        Hi, {userData ? userData.name : name}
        <img
          src={assets.hand_wave}
          alt="hand wave"
          className="w-8 aspect-square"
        />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to our app
      </h2>
      <p className="mb-3">
        Let's start with a quick product tour and we will have you up and
        running in no time
      </p>
      <button className="border-2 text-amber-700 border-amber-700 rounded-full px-8 py-2.5 hover:bg-amber-700 hover:text-amber-200 transition-all">
        Get Started
      </button>
    </div>
  );
}
