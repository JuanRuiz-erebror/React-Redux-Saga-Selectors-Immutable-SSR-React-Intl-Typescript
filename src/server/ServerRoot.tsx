import * as React from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { StaticRouter } from 'react-router'
import store from '../../src/app/store'
import App from '../App'

// import { theme, globalStyles } from '../styles'
 
// globalStyles()


export default ({ location, sheet, locale, messages }) => (
  <Provider store={store}>
    <IntlProvider locale='en'>
      <StyleSheetManager sheet={sheet}>
        {/* <ThemeProvider theme={theme}> */}
          <StaticRouter location={location} context={{}}>
            <App/>
          </StaticRouter>
        {/* </ThemeProvider> */}
      </StyleSheetManager>
    </IntlProvider>
  </Provider>
)
