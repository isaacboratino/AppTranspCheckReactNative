import * as ActionTypes from './../actions/ActionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, loading: true, error: '' };
      case ActionTypes.LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case ActionTypes.LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }

}
