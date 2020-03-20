import { combineReducers } from "redux";

import produtoReducer from "./reducer.product";
import carrinhoReducer from "./reducer.cart";
import githubReducer from "./reducer.github";
import listaDeProdutosReducer from "./reducer.lista-de-produtos";



export default combineReducers({
    produtoReducer,
    carrinhoReducer,
    githubReducer,
    listaDeProdutosReducer,

});