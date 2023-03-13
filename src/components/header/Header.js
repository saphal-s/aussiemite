import React from "react";
import Drawers from "./Drawers";
import { FaCartArrowDown } from "react-icons/fa";
import "./style.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="header">
        <Drawers />
        <div className="company_name">
          <h3>Aussiemite</h3>
        </div>
        <div className="cart">
          <FaCartArrowDown className="icon" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
