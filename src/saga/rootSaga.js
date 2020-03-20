import {all, takeLatest} from 'redux-saga/effects';

import { getAll } from "./sagas-lista_produto-middleware";

export default function* rootSaga(){
    return yield all([
        takeLatest('PRODUTOS_REQUEST_GET_ALL', getAll),
    ])
}

