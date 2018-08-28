import { createAction } from 'redux-actions'
import { UserData, id_token } from '../models/User'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginRequest = createAction<UserData>(LOGIN_REQUEST)
export const loginSuccess = createAction<id_token>(LOGIN_SUCCESS)
export const loginError = createAction<UserData>(LOGIN_ERROR)


//////////////////////////////////////////////////
// createAction description:
//
// createAction(type, payloadCreator, metaCreator)
// loginRequest({id:1, email: 'foo'}, () => ({admin:true}))
// {
//     type: 'LOGIN_REQUEST',
//     payload: { id: 1, email: 'foo' },
//     meta: { admin: true },
// }
//////////////////////////////////////////////////