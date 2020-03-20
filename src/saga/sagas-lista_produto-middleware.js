import {put, call} from 'redux-saga/effects';

import { ListaDeProdutosActionsType  } from "../redux/actions/actions-type";

import api from "../services/api-service-econ";


export function* getProductList(){
    try{
        const response = yield call (api.get, '/produto');
        yield put({type:ProductActionsTypes.SUCCESS_PRODUCT_LIST, payload: {data: response.data}});
    }catch(err){
        yield put({type: ProductActionsTypes.FAILURE_PRODUCT_LIST});
    }
}
