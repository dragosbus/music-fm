import * as ActionTypes from '../actionTypes/actionTypes';
import YTSearch from 'youtube-api-search';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";
const YOUTUBE_API_KEY = 'AIzaSyAEGffpXZAuR9_FpYlWSo5f28JW6ZgJgSE';

export const getArtists = (data) => ({
    type: ActionTypes.GET_ARTISTS,
    payload: data
});

export const getTracks = (data) => ({
    type: ActionTypes.GET_TRACKS,
    payload: data
});

export const getArtistTopTracks = (data) => ({
    type: ActionTypes.GET_ARTIST_TOP_TRACKS,
    payload: data
});

export const searchTerm = (term) => ({
    type: ActionTypes.SET_SEARCH_TERM,
    term
});

export const videoTrack = track => ({
    type: ActionTypes.GET_VIDEO_TRACK,
    payload: track
});

export const getArtistsMiddle = () => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=100`)
      .then(res=>res.json())
      .then(data=>{
        dispatch(getArtists(data.artists.artist));
      })
      .catch(err=>console.log(err));
};

export const getTracksMiddle = () => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`)
        .then(res=>res.json())
        .then(data=>{
            dispatch(getTracks(data.tracks.track));
        })
        .catch(err=>console.log(err));
};

export const getArtistTopTracksMiddle = (artist) => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`)
        .then(res=>res.json())
        .then(data=> {
            dispatch(getArtistTopTracks(data.toptracks.track))
        })  
        .catch(err=>console.log(err));
};

export const getVideoForTrack = track => dispatch => {
    YTSearch({ key: YOUTUBE_API_KEY, term: track }, data=> {
        dispatch(videoTrack(data[0].id.videoId))
        console.log(data[0].id.videoId);
      });
};