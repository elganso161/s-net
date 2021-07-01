import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Dimych",
      img: img1,
    },
    {
      id: 2,
      name: "Andrey",
      img: img2,
    },
    {
      id: 3,
      name: "Masha",
      img: img3,
    },
    {
      id: 4,
      name: "Sasha",
      img: img4,
    },
    {
      id: 5,
      name: "qwerty",
      img: img5,
    },
  ],
  messagesData: [
    { id: 1, message: "Lorem ipsum dolor" },
    { id: 2, message: "Lorem ipsum dolor sit amet." },
    { id: 3, message: "Hi" },
    { id: 4, message: "Hihihihi" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, message: newMessage },
        ],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
