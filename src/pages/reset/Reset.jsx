import { Link } from "react-router-dom";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button";
import "./Reset.css";

function Reset(params) {
  return (
    <div className="background bg-image-reset">
      <div className="box-reset">
        <Link to="/" className="back">
          <span className="arrow-left"></span>Back
        </Link>
        <h1 className="title-reset">
          THAT’S OKAY, WE <br /> GOT YOUR BACK
        </h1>
        <div className="box-reset-pass">
          <p className="text-reset-pass">Enter your email to get reset password code</p>
          <Input outPlaceholder="Enter your email adress" />
          <Button textButton="Send Code" />
          <Button textButton="Resend Code" />
        </div>
      </div>
    </div>
  );
}

export default Reset;
