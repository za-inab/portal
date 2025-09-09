import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";

function Router() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/email-verify"} element={<VerifyEmail />} />
        <Route path={"/reset-password"} element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default Router;
