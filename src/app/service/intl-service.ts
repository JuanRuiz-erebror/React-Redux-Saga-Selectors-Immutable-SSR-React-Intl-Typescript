import * as Cookie from 'js-cookie'
import * as fetch from 'isomorphic-fetch'
import { HOST } from '../../../config'


export const fetchMessagesFromJson = (locale: string) => {

    Cookie.set('locale', locale)

    return fetch(`${HOST}/public/assets/${locale}.json`)
    .then((res) => {
      if (res.status >= 400) throw new Error('Bad response from server')
      return Promise.resolve(res.json())
    }).then((messageData) => {
        console.log('messagedataa', messageData)
        return messageData
    })
      
}
  