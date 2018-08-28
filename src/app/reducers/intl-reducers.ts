import { fromJS } from 'immutable'
import * as Actions from '../actions/intl-actions'
import Action from '../actions'
import * as cookie from 'js-cookie'
import { fetchMessagesFromJson } from '../service/intl-service'

const locale: string = cookie.get('locale') || 'en'

const initialState = fromJS({
	locale: locale,
	messages: {}
})

export default (state = initialState, action: Action<Actions.intl, any>) => {
	console.log('STATEINTLLL',state, 'ACTION_INTL', action)
	switch (action.type) {
		case Actions.UPDATE_SUCCESS:
			return state
				.set('locale',action.payload.locale)
				.set('messages', action.payload.messages)
		default:
			return state
	}
}


// const intlReducer = () => {

// 	return new Promise(async ( res, rej) => {


// 		const messages = await fetchMessagesFromJson(locale)
	
// 		console.log('KKKKKK', locale, messages)

// 		const initialState = fromJS({
// 			locale: locale,
// 			messages: {}
// 		})

// 		const reducer = (state = initialState, action: Action<Actions.intl, any>) => {
// 			console.log('STATEINTLLL',state, 'ACTION_INTL', action)
// 			switch (action.type) {
// 				case Actions.UPDATE_LOCALES:
// 					return state
// 						.set('locale',action.payload.locale)
// 						.set('messages', action.payload.messages)
// 				default:
// 					return state
// 			}
// 		}

// 		res(reducer)

// 	})
	

// }

// export default intlReducer

