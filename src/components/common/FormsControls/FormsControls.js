import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <>
      <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <textarea {...input} {...props} />
        {hasError && <span className={style.formControl}>{meta.error}</span>}
      </div>
    </>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <>
      <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <input {...input} {...props} />
        {hasError && <span className={style.formControl}>{meta.error}</span>}
      </div>
    </>
  );
};