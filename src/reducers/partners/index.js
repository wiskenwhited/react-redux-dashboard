import _ from 'lodash'
import {
    INCREASE_PARTNERS_INDEX,
    REDUCE_PARTNERS_INDEX,
} from '../../constants/actionTypes';

const initialState = {
    partnersIndex: 1,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        
        case INCREASE_PARTNERS_INDEX:
            newState.partnersIndex = newState.partnersIndex + 1
            return newState
        case REDUCE_PARTNERS_INDEX:
            newState.partnersIndex = newState.partnersIndex - 1
            return newState
        default:
            return state;
    }
};

export default reducer;