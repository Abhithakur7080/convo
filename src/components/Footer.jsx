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
          <IoHome />
        </button>
        <button>
          <FaUser />
        </button>
        <button>
          <FaGear />
        </button>
        <button>
          <MdSupportAgent />
        </button>
        <button>
          <FaCircleQuestion />
        </button>
      </div>
    </div>
  );
};

export default Footer;
