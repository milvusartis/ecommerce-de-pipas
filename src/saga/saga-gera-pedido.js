import { CartActionsType } from "../redux/actions/actions-type";
import { gravaPedido } from "../redux/actions/action.cart";
import {all,put, call, takeLatest} from 'redux-saga/effects';
import api from "../services/api";

function* geraPedidoRequested(pedido){
    const response = yield call(api.post,'/pedidos',pedido.pedido);
    
    if(response.status===200){
        let teste = response.data.split(" ")
        yield put(gravaPedido(teste[2].replace(',','')))
    }else{
        yield put(gravaPedido(response.data.idPedido))
    }
    const urlAtual = window.location.href.toString();
    const url = urlAtual.substring(0,22);
    const urlSucesso = url.concat("sucesso");
    document.location.href = urlSucesso;
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