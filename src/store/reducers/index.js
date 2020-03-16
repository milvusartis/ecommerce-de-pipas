import { combineReducers } from "redux";

import produto from "./produto";
import carrinho from "./carrinho";


export default combineReducers({
    produto,
    carrinho
});