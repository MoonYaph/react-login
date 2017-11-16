import { combineReducers } from 'redux';
import user from './user';
/* eslint-disable */
export const makeRootReducer = asyncReducers =>
  combineReducers({
    user,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
