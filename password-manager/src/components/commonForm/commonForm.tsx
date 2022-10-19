import Buttons from "../buttons/buttons";
import Input from "../input/Input";
import "../signUpForm/signUpForm.css";
import "../buttons/buttons.css";
import "../input/Input.css";
import { Link } from "react-router-dom";
import "./commonForm.css";

const commonForm = (props: any) => {
  return (
    <div className="form">
      {props.type === "signUp" ? (
        <>
          <form className="signInBox">
            <p className="signUpHeading ">SIGN UP</p>

            <Input placeholder="Enter Mobile Number" />
            <div className="mpinBox">
              <Input placeholder="Enter 4 Digit MPin" />

            </div>
            <div className="mpinBox">
              <Input placeholder="Re-Enter 4 Digit MPin" />

              <img
                src={require("../../assets/image/eye_on.png")}   
                className="toggleEye"
              />
            </div>
            <div className="bottombox">
              <Link to="/success">
              <Buttons value="SIGN UP" />
              </Link>
            </div>
          </form>
        </>
      ) : (
        <>
          <form className="signInBox">
            <p className="signInHeading">SIGN IN TO YOUR ACCOUNT</p>

            <Input placeholder="Mobile Number" />
            <div className="mpinBox">
              <Input placeholder="MPin" minValue={6} maxValue={6} />

              <img
                src={require("../../assets/image/eye_on.png")}
                
                className="toggleEye"
              />
            </div>
            <div className="bottombox">
              <p className="forgotPasswordText">Forgot your password?</p>

              <div className="buttonDiv">
                <Link to="/home">
                  <Buttons value="SIGN IN" />
                </Link>
              </div>
              <p className="signUpText">
                Don’t have a Account?
                <Link to="/signup" className="signUpLink">
                  SIGNUP
                </Link>{" "}
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default commonForm;
