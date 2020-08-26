// rfec Snipet
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";

import { Link } from "react-router-dom";

import "./styles.scss";
import logo from "./../../assets/react-hook.png";

import {auth} from './../firebase/utils'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signUpSuccess: user.signUpSuccess,
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const signOut = () => {
    auth.signOut();
    dispatch(signOutUserStart());
  };
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
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={signOut}>LogOut</span>
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
