import React from "react";
import style from "./Post.module.css";
import avatar from "../../../../assets/avatar.jpg";
import { useState } from "react";

const Post = (props) => {
  const [count, setCount] = useState(props.likesCount);
  return (
    <>
      <li className={style.item}>
        <img src={avatar} alt="userAva" />
        <p>{props.message}</p>
        <button
          onClick={() => {
            setCount(props.likesCount + 1);
          }}>
          like <span>{count}</span>
        </button>
      </li>
    </>
  );
};

export default Post;
