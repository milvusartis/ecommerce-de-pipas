import {all, takeLatest} from 'redux-saga/effects';

import { getTodoList } from "./sagas-github-middleware";

export default function* rootSaga(){
    return yield all([
        takeLatest('REQUEST_TODO_LIST', getTodoList),
    ])
}

