import { combineReducers } from "redux";

import produto from "./reducer.product";
import carrinho from "./reducer.cart";
import github from "./reducer.github";


export default combineReducers({
    produto,
    carrinho,
    github,
});