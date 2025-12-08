import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around" id="footer">

        <span className="fs-5 fw-bolder  text-black">
        Moses Lal | © 2025 All rights reserved </span>


        <div className="d-flex gap-4">
        <div><FaGithub className="fs-1 "/></div>
        <div><CiMail  className="fs-1 "/></div>
        <div><FaLinkedin className="fs-1 " /></div>
      </div>



        </div>
      
    </>
  );
};

export default Footer;
