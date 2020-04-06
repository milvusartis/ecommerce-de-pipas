import { CartActionsType } from "../redux/actions/actions-type";
import {all,put, call, takeLatest} from 'redux-saga/effects';
import api from "../services/api";

function* geraPedidoRequested(pedido){
    const response = yield call(api.post,'/pedidos',pedido.pedido);
    sessionStorage.removeItem("carrinho")
}

function* whatchRequestGeraPedido(){
    yield takeLatest(CartActionsType.GERA_PEDIDO, geraPedidoRequested)
}

function* realizaPedidoSaga(){
    yield all([
         whatchRequestGeraPedido(),
     ])

 }

export{realizaPedidoSaga} 