import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './../reducers';

const StoreConfig = () => {
  return createStore(
    Reducers, {}, applyMiddleware(ReduxThunk)
  )
}

export default StoreConfig;
