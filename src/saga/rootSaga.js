import {all,} from 'redux-saga/effects';

import { produtosSagas } from "./sagas-lista_produto-middleware";
import { buscaCepSagas } from "./saga-busca-cep";
import { realizaPedidoSaga } from "./saga-gera-pedido";
export default function* rootSaga(){
    yield all ([
        produtosSagas(),
        buscaCepSagas(),
        realizaPedidoSaga()
     ])
}

