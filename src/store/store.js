import { createStore } from 'redux';

import  rootReducer  from "../redux/reducers/root-redux";


const store = createStore(rootReducer);

export default store;