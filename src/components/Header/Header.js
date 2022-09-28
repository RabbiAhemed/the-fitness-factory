import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0  ">
          <div className="header">
            <FontAwesomeIcon icon={faDumbbell} />
            <h4 className="fw-bold ps-2 pt-1">THE FITNESS FACTORY</h4>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Header;
