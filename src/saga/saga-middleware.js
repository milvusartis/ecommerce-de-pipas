import { MiddlewareType, ProductActionsTypes } from "../redux/actions/actions-type";
import { all } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { api } from "../services/api-service";

function* getListRequested() {
const task = yield call(api.get(`/categoria`).then((response) =>{
    console.log(response);
    yield put(ProductActionsTypes.GET_ALL)
    }))

}

function watchRequestGetList() {
    yield takeLatest(MiddlewareType.LIST_ALL_PRODUCT, getListRequested)
}

function sagas() {
    yield all([watchRequestGetList()])
}

export { sagas };