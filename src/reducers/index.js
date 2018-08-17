import {combineReducers} from 'redux';

import {artistsReducer} from './artists';
import {tracksReducer} from './tracks';
import {searchTermReducer} from './searchTerm';
import {artistTopTracks} from './artistTopTracks';
import {videoReducer} from './videoReducer';

const rootReducer = combineReducers({
    artists: artistsReducer,
    tracks: tracksReducer,
    searchTerm: searchTermReducer,
    artistTopTracks: artistTopTracks,
    videoTrack: videoReducer
});

export default rootReducer;