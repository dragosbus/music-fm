import * as ActionTypes from '../actionTypes/actionTypes';

export const topArtistsReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_TOP_ARTISTS:
            return action.payload;
        default:
            return state;
    }
};