import React from "react";
import {
  EndeavourLogo,
  ICDiscord,
  ICGithub,
  ICLinkedin,
  ICYoutube,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-image" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={EndeavourLogo} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICYoutube} />
          <Icon img={ICDiscord} />
          <Icon img={ICGithub} />
          <Icon img={ICLinkedin} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
