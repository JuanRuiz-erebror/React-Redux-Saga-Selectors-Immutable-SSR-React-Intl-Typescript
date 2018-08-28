import * as React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import App from './App'
import store from './app/store'
import { BrowserRouter } from 'react-router-dom'
import * as Cookie from 'js-cookie'
import { fetchMessagesFromJson } from './app/service/intl-service'

// const locale = Cookie.get('locale') || 'en';

//const messageData = fetchMessagesFromJson(locale)  

export default class Root extends React.Component {

	render() {

		return (
			// Provider store already includes Intl params
			<Provider store={store}>
				<IntlProvider locale='en'>
					<BrowserRouter>
						{/* <ThemeProvider theme={theme}> */}
						<App/>
						{/* </ThemeProvider> */}
					</BrowserRouter>
				</IntlProvider>
			</Provider>
		)




	}
}