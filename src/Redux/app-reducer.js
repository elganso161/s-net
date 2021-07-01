import { getAuthUserData } from "./auth-reducer";

const INITIALAIZED_SUCCESS = "INITIALAIZED-SUCCESS";

let initialState = {
  initialaized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALAIZED_SUCCESS:
      return {
        ...state,
        initialaized: true,
      };
    default:
      return state;
  }
};

export const initialaizedSuccess = () => {
  return {
    type: INITIALAIZED_SUCCESS,
  };
};

//redux-thunk
export const initialaizeApp = () => {
  return (dispatch) => {
    let promis = dispatch(getAuthUserData());
    promis.then(() => {
      dispatch(initialaizedSuccess());
    });
  };
};

export default appReducer;
