import { all, takeLatest } from 'redux-saga/effects';

import { addUserRequest } from './users'

export default function* rootSaga(){
  return yield all([
    takeLatest('ADD_USER_REQUEST', addUserRequest),
  ]);
}
