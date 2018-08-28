import { HTML } from '../../config'
import { AnySoaRecord } from 'dns';
import LocaleButton from '../app/components/LocaleButton';

interface RenderOptions {
  html?: string
  styleTags?: any
  locale?: string
  localedata?: any
}



const template = ({ html, styleTags, localedata}: RenderOptions): string => {
  //console.log('LCALE', localedata)
  
  const staticPath = html ? '' : '/dist'
  console.log('STATIPATHxxx', staticPath)
  return `
        <!DOCTYPE html>
        <meta charset="utf-8">
        <title>${HTML.title}</title>
        <link rel="manifest" href="manifest.json">
        <link rel="shortcut icon" href="/static/favicon.ico" />
        ${styleTags || ''}
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <div id="app">${html || ''}</div>
        <script src="${staticPath}/vendors.js"></script>
        <script src="${staticPath}/runtime~app.js"></script>
        <script src="${staticPath}/app.js"></script>
        <script type="application/javascript">${localedata || ''}</script>
    `
} 

export default template
