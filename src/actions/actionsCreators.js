import * as ActionTypes from '../actionTypes/actionTypes';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";

export const getArtists = (data) => ({
    type: ActionTypes.GET_ARTISTS,
    payload: data
});

export const getTracks = (data) => ({
    type: ActionTypes.GET_TRACKS,
    payload: data
});

export const searchTerm = (term) => ({
    type: ActionTypes.SET_SEARCH_TERM,
    term
});

export const getArtistsMiddle = () => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=100`)
      .then(res=>res.json())
      .then(res=>{
        dispatch(getArtists(res.artists.artist));
      })
      .catch(err=>console.log(err));
};

export const getTracksMiddle = () => dispatch => {

};