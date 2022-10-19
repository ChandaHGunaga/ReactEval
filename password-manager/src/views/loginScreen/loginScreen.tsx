import Lockbox from "../../components/lockbox/lockbox";
import "../../index.css";
import "./loginScreen.css";
import CommonForm from "../../components/commonForm/commonForm";
import Divider from "../../components/divider/divider";
import "../loginScreen/loginScreen.css";

const LoginScreen = () => {
  return (
    <div className="logincontainer">
      <div className="loginBox">
        <Lockbox />
        <Divider />
        <CommonForm />
      </div>
    </div>
  );
};

export default LoginScreen;
