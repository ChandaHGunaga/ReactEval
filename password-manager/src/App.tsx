import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/dashboard/dashboard";
import LoginScreen from "./views/loginScreen/loginScreen";
import LoginSuccess from "./views/loginSuccess/loginSuccess";
import SignUpScreen from "./views/signUpScreen/signUpScreen";

function App() {
  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/success" element={<LoginSuccess />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
