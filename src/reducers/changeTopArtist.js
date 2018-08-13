import * as ActionTypes from '../actionTypes/actionTypes';

export const changeTopArtistReducer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.GET_NEXT_TOP_ARTIST:
            return action.index + 1;
        case ActionTypes.GET_PREV_TOP_ARTIST:
            return action.index - 1;
        default:
            return state;
    }
};