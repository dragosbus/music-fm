import * as ActionTypes from '../actionTypes/actionTypes';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";

export const getTopArtists = (data) => ({
    type: ActionTypes.GET_TOP_ARTISTS,
    payload: data
});

export const getTopTracks = (data) => ({
    type: ActionTypes.GET_TOP_TRACKS,
    payload: data
});

export const getNextTopArtist = (index) => ({
    type: ActionTypes.GET_NEXT_TOP_ARTIST,
    index
});

export const getPrevTopArtist = (index) => ({
    type: ActionTypes.GET_NEXT_TOP_ARTIST,
    index
});

export const getTopArtistsMiddle = () => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10`)
      .then(res=>res.json())
      .then(res=>{
        dispatch(getTopArtists(res.artists.artist));
      })
      .catch(err=>console.log(err));
};

export const getTopTracksMiddle = () => dispatch => {

};