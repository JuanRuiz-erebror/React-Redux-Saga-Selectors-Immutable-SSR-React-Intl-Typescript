import { createStore, applyMiddleware, Store, compose } from 'redux'
import rootReducer, { State } from '../reducers'
import RootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware()

const middleware = compose(
	applyMiddleware(sagaMiddleware)
)

const initialState = fromJS({})

const store: Store<State> = createStore(
	rootReducer, 
	initialState,
	middleware
)

if (module.hot) {
	module.hot.accept('../reducers', () => {
		const nextReducer = require('../reducers')
		store.replaceReducer(nextReducer)
	})
}

sagaMiddleware.run(RootSaga);
	
export default store
