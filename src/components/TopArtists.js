import React from 'react';
import Artist from './Artist';

const TopArtists = props => {
    return(
        <ul className="artists-list">
            {props.topArtists.map(artist=> <Artist key={artist.mbid} {...artist}/>)}
        </ul>
    );
};

export default TopArtists;