import { CartActionsType } from "../redux/actions/actions-type";
import  api  from "../services/api-cep";

function* getCepRequested(){
    const response = yield call (api.get, '/');
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