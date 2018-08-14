import * as ActionTypes from '../actionTypes/actionTypes';

export const searchTermReducer = (state='', action) => {
    switch(action.type) {
        case ActionTypes.SET_SEARCH_TERM:
            return action.term;
        default:
            return state;
    }
};