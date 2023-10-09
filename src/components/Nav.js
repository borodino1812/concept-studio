import logo from "../images/pyramid1.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          add
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          home
        </div>
      </div>
    </nav>
  );
};

export default Nav;
