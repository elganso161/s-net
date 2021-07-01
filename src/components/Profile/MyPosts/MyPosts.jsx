import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

let maxLength50 = maxLengthCreator(50);

const MyPosts = (props) => {
  let postsData = [...props.postData]
    .reverse()
    .map((elem) => (
      <Post key={elem.id} message={elem.message} likesCount={elem.likesCount} />
    ));

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <>
      <div className={style.myPosts}>
        <h2>my posts</h2>
        <AddPostFormRedux onSubmit={addNewPost} />
        <ul className={style.posts}>{postsData}</ul>
      </div>
    </>
  );
};

const AddPostform = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={style.addPost}>
          <div>
            <Field
              validate={[required, maxLength50]}
              component={Textarea}
              name={"newPostBody"}
              placeholder={"Enter your message"}
            />
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </form>
    </>
  );
};

const AddPostFormRedux = reduxForm({ form: "postAddMessageForm" })(AddPostform);

export default MyPosts;
