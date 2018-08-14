import * as ActionTypes from '../actionTypes/actionTypes';

export const artistsReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_ARTISTS:
            return action.payload;
        default:
            return state;
    }
};