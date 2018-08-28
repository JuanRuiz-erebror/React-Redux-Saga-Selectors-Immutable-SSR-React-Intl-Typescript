import { createSelector } from 'reselect'

const getIntlDomain = () => (state: any) => {
  console.log('STATES_INTLLL', state )
  return state.get('intl')
}

const selectLocale = () => createSelector(
    getIntlDomain(),
    intlState => intlState.get('locale')
)

const selectMessages = () => createSelector(
    getIntlDomain(),
    intlState => intlState.get('messages')
)

export {
    selectLocale,
    selectMessages
}

export default getIntlDomain
