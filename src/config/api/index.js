import {debugLog} from '../../Common/common';
import {apiPost} from '../../utils/utils';
import {
  checkusernameurl,
  finduserlist,
  getmyrequestlist,
  getprofileurl,
  getuserlist,
  login_user,
  register_user,
  sendotpurl,
} from '../url';

export const hitSendOtpApi = param => {
  return apiPost(sendotpurl, param);
};

export const hitCheckUsername = param => {
  return apiPost(checkusernameurl, param);
};

export const hitRegisterUser = param => {
  return apiPost(register_user, param);
};

export const hitLoginUser = param => {
  return apiPost(login_user, param);
};
//User

export const hitGetUserListApi = () => {
  return apiPost(getuserlist);
};
export const hitGetReqListApi = param => {
  return apiPost(getmyrequestlist, param);
};
export const hitProfileApi = param => {
  return apiPost(getprofileurl, param);
};

export const hitFindUserApi = param => {
  return apiPost(finduserlist, param);
};
