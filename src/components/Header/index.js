// rfec Snipet
import React from "react";

import { Link } from "react-router-dom";

import {auth } from '../firebase/utils' 

import "./styles.scss";
import logo from "./../../assets/react-hook.png";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Just a logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut() } >LogOut</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/signup">Registation</Link>
              </li>
              <li>
                <Link to="/signin">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
