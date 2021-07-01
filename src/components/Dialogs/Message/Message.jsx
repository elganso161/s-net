import React from 'react'
// import style from "./Message.module.css";

const Message = (props) => {
  return (
    <li className="messagesListItem">
      <p>{props.message}</p>
    </li>
  );
};

export default Message
