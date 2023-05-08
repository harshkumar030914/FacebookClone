import { debugLog } from "../../Common/common";
import types from "../types";
export const App_theme = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.APPTHEME,
      payload: data,
    });
  };
};
export const Insert_UserDetails = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.USERDETAILS,
      payload: data,
    });
  };
};
export const Insert_RequestList = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.FRIENDREQUESTLIST,
      payload: data,
    });
  };
};
export const Insert_MyFriends = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.FRIENDS,
      payload: data,
    });
  };
};
export const FriendsProfile = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.FRIENDSPROFILE,
      payload: data,
    });
  };
};
