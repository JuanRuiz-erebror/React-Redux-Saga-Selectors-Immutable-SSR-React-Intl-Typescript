import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import App from './App'
import store from './app/store'
import registerServiceWorker from './utils/registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { SSR } from '../config'
import Root from './Root'

const app = document.getElementById('app') as HTMLElement

if (__DEV__ || !SSR) {
	ReactDOM.render(<Root />, app)
} else {
	ReactDOM.hydrate(<Root />, app)
}

registerServiceWorker()

