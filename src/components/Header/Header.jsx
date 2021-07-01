import React from "react";
import logo from "./logo.png";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login} - <button onClick={props.logout}>LogOut</button>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
