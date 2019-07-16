import _ from 'lodash'
import {
    INCREASE_TEAM_INDEX,
    REDUCE_TEAM_INDEX,
    CHANGE_TEAM_INDEX,
} from '../../constants/actionTypes';

const initialState = {
    teamIndex: 1,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        
        case INCREASE_TEAM_INDEX: 
            newState.teamIndex = newState.teamIndex + 1
            return newState
        case REDUCE_TEAM_INDEX:
            newState.teamIndex = newState.teamIndex - 1
            return newState
        case CHANGE_TEAM_INDEX:
            newState.teamIndex = action.teamIndex
            return newState
        default:
            return state;
    }
};

export default reducer;