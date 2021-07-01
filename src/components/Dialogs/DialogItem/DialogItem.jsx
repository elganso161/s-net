import React from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={style.friendsListItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
                <div className={style.dialogBlock}>
                    <div>
                        <img src={props.img} alt="img" />
                    </div>
                    <div>{props.name}</div>
                </div>
            </NavLink>
        </li>
    );
};

export default DialogItem;
