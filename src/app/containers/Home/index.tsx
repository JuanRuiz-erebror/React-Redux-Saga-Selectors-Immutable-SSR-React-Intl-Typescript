import * as React from 'react'
import * as UserActions from '../../actions/users-actions'
import * as IntlActions from '../../actions/intl-actions'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { UserData, id_token } from '../../models/User'
import { createStructuredSelector } from 'reselect'
import { selectUsers, selectIsLoading, selectIsFetched, selectUserTokenId } from '../../selectors/users-selectors'
import selectIntl, { selectLocale, selectMessages } from '../../selectors/intl-selectors'
import { FormattedMessage, injectIntl, defineMessages, IntlShape } from 'react-intl';
import LocaleButton from '../../components/LocaleButton'

export namespace Home {

	export interface Props extends RouteComponentProps<void> {
		userActions: typeof UserActions
		intlActions: typeof IntlActions
		users: UserData
		token_id: id_token
		isFetched: boolean
		isLoading: boolean
		locale: string
		messages: any

		// IntlShape type arroja un tipo final Validator con 5 args -> mal
		// se define <any> para evitar este problema
		intl: any
	}
		 
	export interface DispatchProps {
		userActions,
		intlActions
	}


}

// const messages = defineMessages({
// 	helloWorld2: {
// 	  id: 'app.hello_world2',
// 	  defaultMessage: 'Hello World 2!',
// 	},
//   });

class HomePage extends React.Component<Home.Props> {

	constructor(props: Home.Props) {
		super(props)
		this.addUser = this.addUser.bind(this)
		this.props.intlActions.updateLocales(this.props.locale)
		console.log('iiiiii')
		
	}

	addUser() {
		const { userActions, intlActions } = this.props
		const userData: UserData = {
			id: 1,
			name: 'Dummy user'
		}
		console.log('userDATa', userData, IntlActions, this.props.locale)
		//userActions.loginRequest(userData)
		intlActions.updateLocales(this.props.locale)
		console.log('kkk')

	}

	render() {
		IntlActions.updateLocales(this.props.locale)
		const { users, token_id, intl, locale, messages } = this.props

		console.log('PORPS', this.props)
		console.log('INTL', intl)
		return (
			<div>
				<h1>
					{messages['app.hello_world']}
					{/* <FormattedMessage 
						id="app.hello_world" 
						defaultMessage="Hello World!" 
						description="Hello world header greeting" 
					/> */}
				</h1>
				<h1 onClick={this.addUser}>
					{messages['app.hello_world2']}
				</h1>
				<p>{token_id}</p>
				<br />
				<Link to="/login">Login page</Link>
				<h2>
					
					{/* {intl.formatMessage(messages.helloWorld2)} */}
				</h2>
				<LocaleButton IntlAction={this.props.intlActions} locale={locale} />	
			</div>
		
		)
	}
}

const mapStateToProps = createStructuredSelector({
	users: selectUsers(),
    isLoading: selectIsLoading(),
	isFetched: selectIsFetched(),
	token_id: selectUserTokenId(),
	locale: selectLocale(),
	messages: selectMessages()
})

const mapDispatchToProps = (dispatch: any): Home.DispatchProps => {
	return {
		userActions: bindActionCreators(UserActions as {}, dispatch),
		intlActions: bindActionCreators(IntlActions as {}, dispatch)
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose<any>(
	withConnect,
	injectIntl
)(HomePage)


