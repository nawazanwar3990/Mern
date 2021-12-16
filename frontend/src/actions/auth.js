
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SET_MESSAGE,
} from "./type";

import AuthService from "../services/auth";

/*
 calls the AuthService.register(object)
 dispatch REGISTER_SUCCESS and SET_MESSAGE if successful
 dispatch REGISTER_FAIL and SET_MESSAGE if failed
 */
export const register = (object) => (dispatch) => {

  return AuthService.register(object).then(
    (data) => {

      switch (data.status) {
        case 200:
          dispatch({
            type: REGISTER_SUCCESS
           
          });
          break;
        case 400:
          dispatch({
            type: REGISTER_FAIL
          });
          break;
      }
    });
};


/*
  calls the AuthService.login(object)
  dispatch LOGIN_SUCCESS and SET_MESSAGE if successful
  dispatch LOGIN_FAIL and SET_MESSAGE if failed
*/
export const login = (object) => (dispatch) => {

  return AuthService.login(object).then(
    (data) => {

      switch (data.status) {
        case 200:
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.user },
          });
          break;
        case 400:
          dispatch({
            type: LOGIN_FAIL
          });
          break;
      }
    });
};

/*
  calls the AuthService.logout()
  dispatch LOGOUT_SUCCESS and SET_MESSAGE if logout
*/
export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
