import { CartActionsType } from "../redux/actions/actions-type";
import { gravaPedido } from "../redux/actions/action.cart";
import {all,put, call, takeLatest} from 'redux-saga/effects';
import api from "../services/api";

function* geraPedidoRequested(pedido){
    const response = yield call(api.post,'/pedidos',pedido.pedido);
    //sessionStorage.removeItem("carrinho")
    if(response.status===200){
        let teste = response.data.split(" ")
        //console.log(teste[2].replace(',',''))
        yield put(gravaPedido(teste[2].replace(',','')))
    }else{
        yield put(gravaPedido(response.data.idPedido))
    }
    document.location.href = "http://localhost:3000/sucesso"
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