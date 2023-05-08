import { debugLog } from "../../Common/common";
import types from "../types";
const initialState = {
  app_theme: 0,
  data: [],
  error: null,
  loading: false,
  userdata: [],
  friendlist: [],
  myfriends: [],
  friendprofile: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.APPTHEME:
      return {
        ...state,
        app_theme: action.payload,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.USERDETAILS: {
      return {
        ...state,
        userdata: action.payload,
      };
    }
    case types.FRIENDREQUESTLIST: {
      return {
        ...state,
        friendlist: action.payload,
      };
    }
    case types.FRIENDS: {
      return {
        ...state,
        myfriends: action.payload,
      };
    }
    case types.FRIENDSPROFILE: {
      return {
        ...state,
        friendprofile: action.payload,
      };
    }
    default:
      return state;
  }
}
