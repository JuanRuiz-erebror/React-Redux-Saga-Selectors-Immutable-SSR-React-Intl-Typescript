import * as React from 'react'
import * as UserActions from '../../actions/users-actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { UserData } from '../../models/User'
import { createStructuredSelector } from 'reselect'
import { selectUsers, selectIsLoading, selectIsFetched } from '../../selectors/users-selectors'

export namespace Login {

	export interface Props extends RouteComponentProps<void> {
		userActions: typeof UserActions
		users: UserData
	}
	 
	export interface DispatchProps {
		userActions
	}

}

class Login extends React.Component<Login.Props> {

	constructor(props: Login.Props) {
		super(props)
		this.addUser = this.addUser.bind(this)
	}

	addUser() {
		const { userActions } = this.props
		const userData: UserData = {
			id: 1,
			name: 'Dummy user'
		}
		userActions.loginRequest(userData)

	}

	render() {
		const { users } = this.props

		return (
			<div>
				<h1 onClick={this.addUser}>
					Login page
				</h1>
				<br />
				<Link to="/">Home page</Link>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector<any, any>({
	users: selectUsers(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched()
})

const mapDispatchToProps = (dispatch: any): Login.DispatchProps => {
	return {
		userActions: bindActionCreators(UserActions as {}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
