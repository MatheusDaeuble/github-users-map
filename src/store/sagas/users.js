import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import { addUserSuccess, addUserError } from 'store/actions/users';

export function* addUserRequest (action){
  try {
    const user = yield call(api.get, '/users/' + action.payload.username);

    const users = yield select(state => state.users.data)

    if (users.find(u => u.user.id == user.data.id)){
      console.log('ENTRU!!!')
      yield put(addUserError('Usuário duplicado!'));
    } else {
      yield put(addUserSuccess(user.data, action.payload.coordinates));
    }

  } catch(erro){
    yield put(addUserError('Usuário não existe!'));
  }

}
