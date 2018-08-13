import {combineReducers} from 'redux';

import {topArtistsReducer} from './topArtists';
import {topTracksReducer} from './topTracks';

const rootReducer = combineReducers({
    topArtists: topArtistsReducer,
    topTracks: topTracksReducer
});

export default rootReducer;