import {combineReducers} from 'redux';

import {artistsReducer} from './artists';
import {tracksReducer} from './tracks';
import {searchTermReducer} from './searchTerm';

const rootReducer = combineReducers({
    artists: artistsReducer,
    tracks: tracksReducer,
    searchTerm: searchTermReducer
});

export default rootReducer;