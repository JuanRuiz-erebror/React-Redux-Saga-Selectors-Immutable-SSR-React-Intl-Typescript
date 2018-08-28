//import test from 'ava'

import { createStore, combineReducers } from 'redux'
import { shallow, configure } from 'enzyme'
//import App from './mocks/ProviderIntl'
import { intlReducer } from 'react-intl-redux'
import { Provider, } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import { FormattedNumber } from 'react-intl'
import React from 'react'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('IntlProvider should render default en locale', () => {
  const reducer = combineReducers({
    intl: intlReducer
  })

  const store = createStore(reducer)
  
  const App = () => (   
      <Provider store={store}>
        <IntlProvider local='es'>
          <FormattedNumber value={1000} />
        </IntlProvider>
      </Provider>
  )    
  
  const app = shallow(<App />)  
  expect(app.html()).toEqual('<span>1,000</span>')
})