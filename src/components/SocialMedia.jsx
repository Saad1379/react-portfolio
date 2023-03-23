import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/saad1379/" target="_blank">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="mailto:sheikh.saad.riaz@gmail.com" target="_blank">
      <div>
        <MdEmail />
      </div>
    </a>
  </div>
);

export default SocialMedia;
