import { fromJS } from 'immutable'
import * as Actions from '../actions/users-actions'
import Action from '../actions'
import { UserData } from '../models/User'

const initialState = fromJS({
	users: [],
	isLogin: false,
	isLoading: false,
	isFetched: false,
	error: false,
	id_token: ''
})

export default (state = initialState, action: Action<UserData, any>) => {
	console.log('STATE',state, 'ACTION', action)
	switch (action.type) {
		case Actions.LOGIN_REQUEST :
			return state
				.set('isLoading', true)
				.set('isFetched', true)
				.set('isLogin', false)
				//.set('users', initialState.get('users'))
		case Actions.LOGIN_SUCCESS :			
			return state
				.set('isLoading', false)
				.set('isFetched', false)
				.set('isLogin', true)
				.set('id_token', action.payload)
		default:
			return state
	}
}
