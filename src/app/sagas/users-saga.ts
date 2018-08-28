import { call, put, take, fork } from 'redux-saga/effects'

import { fetchUsers } from '../service/users-service'
import * as Actions from '../actions/users-actions'
import { loginSuccess, loginError } from '../actions/users-actions'
import { UserData, id_token } from '../models/User'

export function* fetchUsersList(id: string) {
  try {
    const result: id_token = yield call(fetchUsers, id)    
    console.log('RESULT', result)
    yield put(Actions.loginSuccess(result))
  } catch (err) {
    yield put(Actions.loginError(err))
  }
}

export function* UsersWatcher() {  
  while (true) {
    console.log('saga')
    const { payload } = yield take(Actions.LOGIN_REQUEST)
    console.log('ID', payload.id)
    yield fork(fetchUsersList, payload.id)
  }
}
