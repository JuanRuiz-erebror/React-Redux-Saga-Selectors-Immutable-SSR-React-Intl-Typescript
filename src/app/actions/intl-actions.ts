import { createAction } from 'redux-actions'

export const UPDATE_LOCALES = 'UPDATE_LOCALES'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

export interface intl {
    locale: locale
    messages?: any
    formats?: object
}

export declare type locale = string

export const updateLocales = createAction<locale>(UPDATE_LOCALES)
export const updateSuccess = createAction<any>(UPDATE_SUCCESS)
