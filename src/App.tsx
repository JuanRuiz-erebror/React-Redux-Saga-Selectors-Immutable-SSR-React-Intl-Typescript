import * as React from 'react'
import { Switch, Route } from 'react-router'
import HomeContainer from './app/containers/Home'
import LoginContainer from './app/containers/Login'
import { hot } from 'react-hot-loader'

import './styles/App.scss'

interface Props {}

class App extends React.Component<Props> {

	render() {
		return (

			<div className="App">
				<Switch>
					<Route exact={true} path="/" component={HomeContainer} />
					<Route path="/login" component={LoginContainer} />
				</Switch>
			</div>
		)
	}
}

	
export default hot(module)(App)


