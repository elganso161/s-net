import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Redirect } from "react-router";
import style from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={"Email"}
            name={"email"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            placeholder={"password"}
            name={"password"}
            type={"password"}
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <label htmlFor="rememberMe">
            <Field
              type="checkbox"
              name={"rememberMe"}
              id={"rememberMe"}
              component={Input}
            />
            Remeber me
          </label>
        </div>
        {props.captchaUrl && <img src={props.captchaUrl} alt={"captcha"} />}
        {props.captchaUrl && (
          <Field
            placeholder={"Symbols from image"}
            name={"captcha"}
            component={Input}
            validate={[required]}
          />
        )}
        {props.error && (
          <div className={style.formSummeryError}>{props.error}</div>
        )}
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h2>login</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
