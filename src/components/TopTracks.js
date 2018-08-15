import React from 'react';
import Track from './Track';

const TopTracks = props => {
    return (
        <ul className="top-tracks">
            {props.tracks.map(track=><Track {...track}/>)}
        </ul>
    );
};

export default TopTracks;