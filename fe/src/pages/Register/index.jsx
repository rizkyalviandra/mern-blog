import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Input, Link, WhiteSpace } from "../../components";
import "./register.scss";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={RegisterBg} alt="Register Background" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input type="text" label="Full Name" placeholder="Full Name" />
        <WhiteSpace />
        <Input type="text" label="Email" placeholder="Email" />
        <WhiteSpace />
        <Input type="password" label="Password" placeholder="Password" />
        <WhiteSpace height={40} />
        <Button onClick={() => history.push("/login")} title="Register" />
        <WhiteSpace height={50} />
        <Link onClick={() => history.push("/login")} title="Back to login" />
      </div>
    </div>
  );
};

export default Register;
