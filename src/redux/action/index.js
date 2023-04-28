import {debugLog} from '../../Common/common';
import {hitSendOtpApi} from '../../config/api';
import {checkusernameurl} from '../../config/url';
import {apiPost} from '../../utils/utils';
import types from '../types';
export const App_theme = data => {
  return dispatch => {
    dispatch({
      type: types.APPTHEME,
      payload: data,
    });
  };
};
export const Insert_UserDetails = data => {
  return dispatch => {
    dispatch({
      type: types.USERDETAILS,
      payload: data,
    });
  };
};
export const Insert_RequestList = data => {
  return dispatch => {
    dispatch({
      type: types.FRIENDREQUESTLIST,
      payload: data,
    });
  };
};
export const fetchDataAction = param => {
  return async dispatch => {
    hitSendOtpApi(param)
      .then(res => {
        dispatch({
          type: types.FETCH_DATA_SUCCESS,
          payload: res,
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_DATA_FAILURE,
          payload: err,
        });
      })
      .finally(() => {
        dispatch({
          type: types.LOADING,
          payload: false,
        });
      });
  };
};
