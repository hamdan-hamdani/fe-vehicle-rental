import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./Signup.css";

function Signup() {
  return (
    <div className="background bg-image-signup">
      <h1 className="title">
        LET’S HAVE <br />
        SOME RIDE
      </h1>
      <div className="box-input">
        <Input outPlaceholder="Email" />
        <Input outPlaceholder="Mobile Phone" />
        <Input outPlaceholder="Password" type="password" />
        <Button textButton="Sign Up" />
        <Button textButton="Sign up with google" />
        <div className="box-signup">
          <Link to="/" className="text">
            Already have an account? Login now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
