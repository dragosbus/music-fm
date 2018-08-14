import {combineReducers} from 'redux';

import {artistsReducer} from './artists';
import {tracksReducer} from './tracks';

const rootReducer = combineReducers({
    artists: artistsReducer,
    tracks: tracksReducer
});

export default rootReducer;