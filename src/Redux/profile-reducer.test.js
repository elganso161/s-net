import profileReducer, { addPostActionCreator } from "./profile-reducer";
let state = {
  postData: [
    { id: 1, message: "Hi, how are u?", likesCount: 1 },
    { id: 2, message: "my first post", likesCount: 5 },
    { id: 3, message: "post", likesCount: 20 },
    { id: 4, message: "my post", likesCount: 2 },
  ],
};

it("length of post should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("hello world");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postData.length).toBe(5);
});
it("message correct", () => {
  //1. test data
  let action = addPostActionCreator("hello world");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.postData[4].message).toBe("hello world");
});
