import {combineReducers} from 'redux';

import {topArtistsReducer} from './topArtists';
import {topTracksReducer} from './topTracks';
import {changeTopArtistReducer} from './changeTopArtist';

const rootReducer = combineReducers({
    topArtists: topArtistsReducer,
    topTracks: topTracksReducer,
    indexTopArtist: changeTopArtistReducer
});

export default rootReducer;