import {combineReducers} from 'redux';

import {artistsReducer} from './artists';
import {tracksReducer} from './tracks';
import {searchTermReducer} from './searchTerm';
import {artistTopTracks} from './artistTopTracks';

const rootReducer = combineReducers({
    artists: artistsReducer,
    tracks: tracksReducer,
    searchTerm: searchTermReducer,
    artistTopTracks: artistTopTracks
});

export default rootReducer;