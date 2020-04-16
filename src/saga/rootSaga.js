import {all,} from 'redux-saga/effects';

import { produtosSagas } from "./sagas-lista_produto-middleware";
import { buscaCepSagas } from "./saga-busca-cep";
import { realizaPedidoSaga } from "./saga-gera-pedido";
import { usuarioSaga } from "./saga-usuario";

export default function* rootSaga(){
    yield all ([
        usuarioSaga(),
        produtosSagas(),
        buscaCepSagas(),
        realizaPedidoSaga()
     ])
}

