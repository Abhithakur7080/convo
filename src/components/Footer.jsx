import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaGear, FaCircleQuestion } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <button>
          <IoHome /> <span>Home</span>
        </button>
        <button>
          <FaUser /> <span>Profile</span>
        </button>
        <button>
          <FaGear /> <span>Settings</span>
        </button>
        <button>
          <MdSupportAgent /> <span>Contact us</span>
        </button>
        <button>
          <FaCircleQuestion /> <span>About us</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
