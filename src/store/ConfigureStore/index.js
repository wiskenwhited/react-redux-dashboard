import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from 'redux-logger'

import RootReducer from '../../reducers';

let configureStore = initialState => {
  return createStore(
      RootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
};

export default configureStore