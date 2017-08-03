import React from 'react';
import { Actions } from 'react-native-router-flux';
import * as ActionTypes from './ActionTypes';
import { URLsConfig } from '../configs/URLsConfig';
import ConnectAPI from '../concerns/ConnectAPI';

export const loginUser = ({ user, password }) => {

  return (dispatch) => {

    dispatch({ type: ActionTypes.LOGIN_USER });

    new ConnectAPI().post(URLsConfig.auth, {user:{user:user, password:password}});

    console.log(user == 'admin' && password == 'admin');

    if (user == 'admin' && password == 'admin') {
        loginUserSuccess(dispatch, user);
    }
    else
      loginUserFail(dispatch);

      Actions.transport();
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
