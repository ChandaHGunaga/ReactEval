import React from "react";
import Divider from "../../components/divider/divider";
import Lockbox from "../../components/lockbox/lockbox";
import "../loginScreen/loginScreen.css";
import "../../index.css";

import CommonForm from "../../components/commonForm/commonForm";
import "./signUpScreen.css";

const SignUpScreen = () => {
  return (
    <div className="signUpContainer">
      <div className="loginBox">
        <Lockbox />
        <Divider />
        <CommonForm type="signUp" />
      </div>
    </div>
  );
};

export default SignUpScreen;
