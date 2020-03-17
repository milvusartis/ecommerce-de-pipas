import { createStore } from 'redux';

import  rootReducer  from "./reducers/root-redux";


const store = createStore(rootReducer);

export default store;