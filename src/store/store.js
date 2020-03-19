import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../redux/reducers/root-redux';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
