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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h2>login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
