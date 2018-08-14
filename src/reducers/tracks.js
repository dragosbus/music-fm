import * as ActionTypes from '../actionTypes/actionTypes';

export const tracksReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.GET_TRACKS:
            return action.payload;
        default:
            return state;
    }
};