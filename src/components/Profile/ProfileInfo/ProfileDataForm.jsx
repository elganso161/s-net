import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <button>save</button>
        </div>
        {props.error && (
          <div className={style.formSummeryError}>{props.error}</div>
        )}
        <ul>
          <li>
            <b>fullName</b> :
            <Field
              placeholder={"Full name"}
              name={"fullName"}
              component={Input}
              validate={[]}
            />
          </li>
          <li>
            <b>Looking for a job : </b>
            <Field
              placeholder={""}
              name={"lookingForAJob"}
              component={Input}
              type="checkbox"
              validate={[]}
            />
          </li>
          <li>
            <b>My profissional skills</b>
            <Field
              placeholder={"My profissional skills"}
              name={"lookingForAJobDescription"}
              component={Textarea}
              validate={[]}
            />
          </li>
          <li>
            <b>About me</b>
            <Field
              placeholder={"About me"}
              name={"aboutMe"}
              component={Textarea}
              validate={[]}
            />
          </li>
          <li>
            <b>Contacts :</b>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div key={key}>
                  <b>{key} :</b>
                  <Field
                    placeholder={key}
                    name={"contacts." + key}
                    component={Input}
                    validate={[]}
                  />
                </div>
              );
            })}
          </li>
        </ul>
      </form>
    </>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
