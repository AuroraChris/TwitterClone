import { apiCall, setTokenHeader} from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import {addError, removeError} from "./errors";

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token){
  setTokenHeader(token);
}

export function authUser(type, userData){
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    return new Promise((resolve, reject) => {
      return apiCall("POST", `/api/auth/${type}`, userData).then(({token, ...user})).then(data =>{
        localStorage.setItem("jwtToken", token)
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      }).catch(err => {
        dispatch(addError(err.message));
        reject();
      });
    })
  }
}
