import {put, call} from 'redux-saga/effects';

import { ListaDeProdutosActionsType  } from "../redux/actions/actions-type";

import { produtoActions } from "../redux/actions/action.lista-de-produtos";

import api from "../services/api-service-econ";


export function* getAll(){
   
        const response = yield call (api.get, '/produto');
        yield put(produtoActions.getAll(response));
   
}
