import React from 'react';
import { Actions } from 'react-native-router-flux';
import * as ActionTypes from './ActionTypes';

export const loginUser = ({ user, password }) => {

  return (dispatch) => {

    dispatch({ type: ActionTypes.LOGIN_USER });

    console.log(user == 'admin' && password == 'admin');

    if (user == 'admin' && password == 'admin') {
        loginUserSuccess(dispatch, user);
    }
    else
      loginUserFail(dispatch);
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: user
  });

  //Actions.main();
};