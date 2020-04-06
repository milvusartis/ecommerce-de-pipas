import { CartActionsType } from "../redux/actions/actions-type";
import {all, call, takeLatest} from 'redux-saga/effects';
import api from "../services/api";
function removeType(pedido){
    let teste ={
        pedido:pedido.pedido,
        usuario:pedido.usuario,
        pagamento:pedido.pagamento,
        cartao:pedido.cartao,
        nomeEntrega:pedido.nomeEntrega,
        enderecoEntrega:pedido.enderecoEntrega
    }
    return teste
}
function* geraPedidoRequested(pedido){
    const response = yield call (api.post,'/pedidos',removeType(pedido));
    //sessionStorage.removeItem("carrinho")
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