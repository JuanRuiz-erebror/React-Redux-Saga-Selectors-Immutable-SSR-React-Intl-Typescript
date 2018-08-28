import * as React from 'react'
import * as express from 'express'
import { port, SSR } from '../../config'
import { ServerStyleSheet } from 'styled-components'
import * as cookieParser from 'cookie-parser'
import renderFullPage from './renderFullPage'
import * as fs from 'fs'
import * as path from 'path'
import acceptLanguage from 'accept-language'
import { fetchMessagesFromJson } from '../app/service/intl-service'

const app = express()

//console.log('COOOKIEFDDS',cookieParser)
app.use(cookieParser())
app.use('/public/assets', express.static('public/assets'));



const languages = ['en','es']
acceptLanguage.languages(['en', 'es']);
let locale
//let messages = {}
let localeData = {}

languages.forEach((loc) => {
  localeData[loc] = fs.readFileSync(path.join(__dirname, `../../node_modules/react-intl/locale-data/${loc}.js`)).toString()
  //messages[loc] = require(`../../public/assets/${loc}.json`)
});

const detectLanguage = req => {
  const cookieLocale = req.cookies.locale;
  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
  }

const setCookieLang = (res, lang) => {
  const date: any = new Date()
  res.cookie('locale', lang, { maxAge: (date * 0.001) + (365 * 24 * 3600) });
}



if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const clientConfig = require('../../webpack/client-dev')
  const serverConfig = require('../../webpack/server')

  console.log('dsds')
  const compiler = webpack([clientConfig, serverConfig])

  app.use(webpackDevMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,    
    noInfo: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { 
      colors: true,
      'errors-only': true
    }
  }))

  let cont = 0;
  const clientCompiler = compiler.compilers.find(c => c.name === 'client')

  app.use(webpackHotMiddleware(clientCompiler))

  app.get('*', (req, res) => {    
    
    locale = detectLanguage(req)

    console.log('JJJ', locale)
    setCookieLang(res, locale)

    console.log('sss', locale, cont)
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleTags()
    const localedata = localeData[locale]
    const html: string = ''
    cont++

    res.status(200).send(renderFullPage({html, styleTags, localedata }))
  })
} else {
  const path = require('path')
  const compress = require('compression')
  const { renderToString } = require('react-dom/server')
  const ServerRoot = require('./ServerRoot').default

  app.use(compress())
  app.use(express.static(path.resolve(__dirname, '../../dist')))

  app.use(async (req, res) => {
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleTags()

    locale = detectLanguage(req)
    setCookieLang(res, locale)

    const messages = fetchMessagesFromJson(locale)

    const html = SSR
    ? renderToString(<ServerRoot locale={locale} messages={messages} location={req.url} sheet={sheet.instance}/>)
    : ' '
    
    const localedata = localeData[locale]
    res.status(200).send(renderFullPage({ html, styleTags, localedata }))   
  })
}

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`[${process.env.NODE_ENV}] server running on http://localhost:${port}/`)
})

// let currentApp = app
// const server = http.createServer(app)

// if (module.hot) {
//   module.hot.accept('./server', () => {
//    app.removeListener('request', currentApp)
//    server.on('request', app)
//    currentApp = app
//   })
//  }