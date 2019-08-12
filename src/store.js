import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ACTION_TYPES } from "./actions.js";

const initialState = {
  loginStatus: false,
  listStatus: false,
  username: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case ACTION_TYPES.SEARCH:
      return {
        ...state,
        loginStatus: action.payload
      };
    case ACTION_TYPES.SET_LIST_STATUS:
      return {
        ...state,
        listStatus: action.payload
      };
    // case "FETCH_FOLLOWERS":
    //   return {
    //     ...state,
    //     followers: action.payload
    //   }
    default:
      return state;
  }
};
export default createStore(rootReducer, applyMiddleware(thunk));
