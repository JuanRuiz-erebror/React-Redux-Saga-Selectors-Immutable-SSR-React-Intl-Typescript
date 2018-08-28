import { all, fork } from 'redux-saga/effects'
import { UsersWatcher } from './users-saga'
import { IntlWatcher } from './intl-saga'

export default function* rootSaga() {
  yield all([
    fork(UsersWatcher),
    fork(IntlWatcher)
  ])
}
