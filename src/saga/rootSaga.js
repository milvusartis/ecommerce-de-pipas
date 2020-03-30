import {all,} from 'redux-saga/effects';

import { produtosSagas } from "./sagas-lista_produto-middleware";
import { buscaCepSagas } from "./saga-busca-cep";
export default function* rootSaga(){
    yield all ([
        produtosSagas(),
        buscaCepSagas()
     ])
}

