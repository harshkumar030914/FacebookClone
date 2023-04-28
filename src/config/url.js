import {debugLog} from '../Common/common';

export const API_BASE_URL = 'http://192.168.29.101:9000/';
// export const API_BASE_URL = 'http://192.168.43.101:9000/';
const getEndpoint = text => {
  return API_BASE_URL + text;
};
export const getimage = text => {
  return API_BASE_URL + 'images/' + text;
};

export const sendotpurl = getEndpoint('auth/sendotp');
export const checkusernameurl = getEndpoint('auth/checkusername');
export const register_user = getEndpoint('auth/register');
export const login_user = getEndpoint('auth/login');

//users route
export const getuserlist = getEndpoint('user/getuserlist');
export const getprofileurl = getEndpoint('user/profile');
export const getmyrequestlist = getEndpoint('user/getreqlist');
export const finduserlist = getEndpoint('user/finduser');
