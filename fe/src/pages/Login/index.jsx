import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Input, Link, WhiteSpace } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={LoginBg} alt="Register Background" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input type="text" label="Email" placeholder="Email" />
        <WhiteSpace />
        <Input type="password" label="Password" placeholder="Password" />
        <WhiteSpace height={40} />
        <Button onClick={() => history.push("/")} title="Login" />
        <WhiteSpace height={50} />
        <Link
          onClick={() => history.push("/register")}
          title="Haven't account? Signup now"
        />
      </div>
    </div>
  );
};

export default Login;
