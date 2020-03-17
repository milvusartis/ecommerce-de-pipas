import { combineReducers } from "redux";

import produto from "./reducer.product";
import carrinho from "./reducer.cart";


export default combineReducers({
    produto,
    carrinho
});