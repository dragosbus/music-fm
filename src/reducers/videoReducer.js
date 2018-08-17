import * as ActionTypes from '../actionTypes/actionTypes';

export const videoReducer = (state='', action) => {
    switch(action.type) {
        case ActionTypes.GET_VIDEO_TRACK:
            return action.payload;
        default:
            return state;
    }
};