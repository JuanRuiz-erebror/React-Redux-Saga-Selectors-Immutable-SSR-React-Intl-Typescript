import { createSelector } from 'reselect'

const getUsersDomain = () => (state: any) => {
  console.log('STATESSSSSS', state )
  return state.get('userDomain')
}

const selectUsers = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('users').toJS()
)

const selectIsLoading = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isLoading')
)

const selectIsFetched = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isFetched')
)

const selectUserTokenId = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('id_token')
)

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched,
  selectUserTokenId
}

export default getUsersDomain
