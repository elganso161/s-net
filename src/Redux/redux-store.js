import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducers from "./users-reducer";
import authReducers from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReducer,
  usersPage: usersReducers,
  auth: authReducers,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
