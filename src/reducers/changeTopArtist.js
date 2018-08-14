import * as ActionTypes from '../actionTypes/actionTypes';

export const changeTopArtistReducer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.GET_NEXT_TOP_ARTIST:
            return state < 9 ? state+1 : 0;
        case ActionTypes.GET_PREV_TOP_ARTIST:
            return state > 0 ? state - 1 : 9;
        default:
            return state;
    }
};