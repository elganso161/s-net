import React from "react";
import preloader from "./spinner.svg";
import style from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <>
      <div className={style.loadingSpinner}>
        <img src={preloader} alt="loadingSpinner" />
      </div>
    </>
  );
};

export default Preloader;
