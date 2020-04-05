import { CartActionsType } from "../redux/actions/actions-type";
import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from "../services/api";

async function geraJSON(pedido){
    let res = await api.post
    let json = {
        valorFrete:pedido.valorFrete,
        diasParaEntrega:pedido.diasEntrega,
        pedidoItens:pedido.addedItems,
        cliente:{idCliente:user.idCliente}
    }
    return json;
}

function* geraPedidoRequested(pedido){
    const response = yield call (api.post,geraJSON(pedido));
}

function* whatchRequestGeraPedido(){
    yield takeLatest(  CartActionsType.GERA_PEDIDO, geraPedidoRequested)
}

function* realizaPedido(){
    yield all([
         whatchRequestGeraPedido(),
     ])

 }

export{realizaPedido} 