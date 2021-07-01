import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsOnline from "../FriendsOnline/FriendsOnline";

const Navbar = () => {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink to='/profile' activeClassName={style.active}>
                            Profile
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/dialogs' activeClassName={style.active}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/news' activeClassName={style.active}>
                            News
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/music' activeClassName={style.active}>
                            Music
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/users' activeClassName={style.active}>
                            Users
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/setting' activeClassName={style.active}>
                            Settings
                        </NavLink>
                    </li>
                </ul>
                <FriendsOnline />
            </nav>
        </>
    );
};

export default Navbar;
