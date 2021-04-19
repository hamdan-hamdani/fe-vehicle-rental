import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./Login.css";

function Login({ username, password }) {
  return (
    <div className="background bg-image-login">
      <h1 className="title">
        LET’S EXPLORE <br /> THE WORLD
      </h1>
      <div className="box-input">
        <Input className="input" outPlaceholder={username} />
        <Input className="input" outPlaceholder={password} />
        <Link to="/reset" className="text">
          Forgot Password?
        </Link>
        <Button className="btn-login" textButton="Login" />
        <div className="box-login">
          <Link to="/signup" className="text">
            Don’t have account? Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
