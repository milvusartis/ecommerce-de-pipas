import { all, put, call, takeLatest } from 'redux-saga/effects';

import { UserLoginActionsType } from "../redux/actions/actions-type";

import { userAcions } from "../redux/actions/action.user";

import api from "../services/api";


function* getUser() {
    const response = yield call(api.get, '/auth/user');
    const usuario = response.data
    sessionStorage.setItem("usuario", JSON.stringify(usuario))
    yield put(userAcions.changeUser(usuario));
}

function* whatchRequestGetList() {
    yield takeLatest(UserLoginActionsType.REQUEST_CHANGE_USER, getUser)
}

function* usuarioSaga() {
    yield all([
        whatchRequestGetList(),
    ])

}

export { usuarioSaga }