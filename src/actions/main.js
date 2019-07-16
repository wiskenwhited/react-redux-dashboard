import {
    CHANGE_LANGUAGE,
} from '../constants/actionTypes';

export function changeLanguage (locale) {
    return {
        type: CHANGE_LANGUAGE,
        locale
    }
}