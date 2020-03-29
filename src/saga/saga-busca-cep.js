import { CartActionsType } from "../redux/actions/actions-type";
import { changeFreteInfo } from "../redux/actions/action.cart";
import  api  from "../services/api-cep";
import { takeLatest, call,all,put } from 'redux-saga/effects';

function* getCepRequested(cep){
    console.log("o cep")
    try {
        const response = yield call (api.get, '/'+cep+'/json');
        if(response.data.uf==='SP'){
            yield put(console.log('SP'))
            yield put(changeFreteInfo(4,3))
        }else{
            yield put(changeFreteInfo(8,6))
        }
    } catch (error) {
        
        yield put(changeFreteInfo('',''))
    }
}

function* whatchRequestGetCep(){
    yield takeLatest(  CartActionsType.GET_CEP , getCepRequested
}

function* buscaCepSagas(){
    yield all([
         whatchRequestGetCep(),
     ])

 }

export{buscaCepSagas} 