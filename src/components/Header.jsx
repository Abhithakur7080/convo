import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <h1>
          <MdConnectWithoutContact /> Convo <span>live</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
