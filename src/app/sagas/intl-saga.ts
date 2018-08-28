import { call, put, take, fork } from 'redux-saga/effects'
import { fetchMessagesFromJson } from '../service/intl-service'
import * as Actions from '../actions/intl-actions'

export function* fetchMessages(locale: string) {
  try {
    const result: Actions.intl = yield call(fetchMessagesFromJson, locale)
    yield put(Actions.updateSuccess({locale:locale, messages: result}))
  } catch (err) {
      console.log(err)
    //yield put(Actions.loginError(err))
  }
}

export function* IntlWatcher() {  
  while (true) {
    console.log('intls-saga', Actions)
    const { payload } = yield take(Actions.UPDATE_LOCALES)
    console.log('LOCALE M', payload)
    yield fork(fetchMessages, payload)
  }
}
