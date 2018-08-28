import { combineReducers } from 'redux-immutable'
import userReducer from './users-reducers'
import { UserData } from '../models/User'
import { RouterState } from 'react-router-redux'
//import { intlReducer } from 'react-intl-redux'

import intlReducer from './intl-reducers'

export declare interface Intl {
	locale?: string
	messages?: object	
}

export interface State {
	user: UserData
	i: Intl
}

export default combineReducers<State>({
	userDomain: userReducer,
	intl: intlReducer
})
