import { all, put, call, takeLatest } from 'redux-saga/effects';

import { ListaDeProdutosActionsType } from "../redux/actions/actions-type";

import { listaDeProdutoActions } from "../redux/actions/action.lista-de-produtos";

import api from "../services/api";


function* getListRequested() {
    // const produtos = yield call(todoApis.getAll);
    // yield put (listaDeProdutoActions.getALL(produtos.data));
    const response = yield call(api.get, '/produtos');
    yield put(listaDeProdutoActions.getALL(response.data.content));
}

function* whatchRequestGetList() {
    yield takeLatest(ListaDeProdutosActionsType.PRODUTOS_REQUEST_GET_ALL, getListRequested)
}

function* produtosSagas() {
    yield all([
        whatchRequestGetList(),
    ])

}

export { produtosSagas }