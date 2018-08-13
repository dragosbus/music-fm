import * as ActionTypes from '../actionTypes/actionTypes';

export const getTopArtists = (data) => ({
    type: ActionTypes.GET_TOP_ARTISTS,
    payload: data
});

export const getTopTracks = (data) => ({
    type: ActionTypes.GET_TOP_TRACKS,
    payload: data
});