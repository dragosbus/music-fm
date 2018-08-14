import * as ActionTypes from '../actionTypes/actionTypes';

export const topTracksReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_TOP_TRACKS:
            return action.payload;
        default:
            return state;
    }
};