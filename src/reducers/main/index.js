import _ from 'lodash'
import {
    CHANGE_LANGUAGE,
} from '../../constants/actionTypes';

import { labels_en, labels_cn, labels_pt} from '../../constants/labels'
import content from '../../constants/content'
const labels = {
    "/pt": labels_pt,
    "/en": labels_en,
    "/cn": labels_cn,
}
const initialState = {
   labels: labels[localStorage.getItem('base') || "/en"],
   content: content,
   base: localStorage.getItem('base') || "/en",
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    switch(action.type) {
        
        case CHANGE_LANGUAGE:
            newState.base = action.locale
            localStorage.setItem('base', newState.base)
            if ( action.locale === "/en") {
                newState.labels = labels_en
            }
            if ( action.locale === "/cn") {
                newState.labels = labels_cn
            }
            if ( action.locale === "/pt") {
                newState.labels = labels_pt
            }
            return newState
        default:
            return state;
    }
};

export default reducer;