import * as ActionTypes from '../actionTypes/actionTypes';

export const artistTopTracks = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_ARTIST_TOP_TRACKS:
            return action.payload;
        default:
            return state;
    }
};