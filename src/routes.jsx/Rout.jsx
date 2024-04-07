import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Contactus from "../pages/Contactus";
import Aboutus from "../pages/Aboutus";
import { AuthContextProvider } from "../config/AuthContext";

const Rout = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="contact-us" element={<Contactus />} />
            <Route path="about-us" element={<Aboutus />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Rout;
