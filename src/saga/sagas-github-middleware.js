import { put, call } from 'redux-saga/effects';

import  {GithubActionsType} from '../redux/actions/actions-type'

import api from "../services/api-service-github";



export function* getTodoList() {
  try {
    const response = yield call(api.get, 'users/diogenesistemas/repos');

    yield put({ type: GithubActionsType.SUCCESS_TODO_LIST, payload: { data: response.data } });
  } catch (err) {
    yield put({ type: GithubActionsType.FAILURE_TODO_LIST });
  }
}
