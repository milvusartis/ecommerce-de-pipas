import {all,} from 'redux-saga/effects';

import { produtosSagas } from "./sagas-lista_produto-middleware";

export default function* rootSaga(){
    yield all ([
        produtosSagas(),
     ])
}

