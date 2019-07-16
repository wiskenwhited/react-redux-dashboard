import {
    INCREASE_PARTNERS_INDEX,
    REDUCE_PARTNERS_INDEX,
} from '../constants/actionTypes';

export function increasePartnersIndex () {
    return {
        type: INCREASE_PARTNERS_INDEX,
    }
}

export function reducePartnersIndex () {
    return {
        type: REDUCE_PARTNERS_INDEX,
    }
}