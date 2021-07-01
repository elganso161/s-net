import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogsData.map((elem) => (
    <DialogItem key={elem.id} name={elem.name} id={elem.id} img={elem.img} />
  ));

  let messagesElement = state.messagesData.map((elem) => (
    <Message key={elem.id} message={elem.message} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  if (props.isAuth === false) return <Redirect to={"/login"} />;

  return (
    <>
      <div className={style.dialogs}>
        <div>
          <ul>{dialogsElement}</ul>
        </div>
        <div className="messages">
          <ul className="messagesList">{messagesElement}</ul>
        </div>
        <div></div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </>
  );
};

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={style.addMessageBlock}>
          <Field
            validate={[required, maxLength100]}
            component={Textarea}
            name={"newMessageBody"}
            placeholder={"Enter your message"}
          />
          <button>addMessage</button>
        </div>
      </form>
    </>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
