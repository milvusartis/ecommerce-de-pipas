import createSagaMiddleware from 'redux-saga'

import { createStore, applyMiddleware } from "redux";

import rootReducer from '../redux/reducers/root-redux';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store;
