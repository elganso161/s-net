import React from "react";
import style from "./Users.module.css";
import img1 from "../../assets/img1.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({
  currentPage,
  onPageChanged,
  pageSize,
  totalUsersCount,
  ...props
}) => {
  return (
    <>
      <ul>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
        />
        {props.users.map((elem) => (
          <li key={elem.id}>
            <div>
              <div>
                <NavLink to={"/profile/" + elem.id}>
                  <img
                    className={style.userImage}
                    src={elem.photos.small != null ? elem.photos.small : img1}
                    alt="userPhoto"
                  />
                </NavLink>
              </div>
              <div>
                {elem.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === elem.id
                    )}
                    onClick={() => {
                      props.unfollow(elem);
                    }}>
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === elem.id
                    )}
                    onClick={() => {
                      props.follow(elem);
                    }}>
                    follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>
                <p>{elem.name}</p>
                <p>{elem.status}</p>
              </div>
            </div>
          </li>
        ))}
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
        />
      </ul>
    </>
  );
};

export default Users;
