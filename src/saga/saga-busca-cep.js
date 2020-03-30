import { CartActionsType } from "../redux/actions/actions-type";
import { changeFreteInfo } from "../redux/actions/action.cart";
import  api  from "../services/api-cep";
import { takeLatest, call,all,put } from 'redux-saga/effects';

function* getCepRequested(cep){
    const response = yield call (api.get, '/'+cep.cep+'/json');
    yield put(changeFreteInfo(response))
}

function* whatchRequestGetCep(){
    yield takeLatest(  CartActionsType.GET_CEP , getCepRequested)
}

function* buscaCepSagas(){
    yield all([
         whatchRequestGetCep(),
     ])

 }

export{buscaCepSagas} 