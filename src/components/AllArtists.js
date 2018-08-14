import React from 'react';
import Artist from './Artist';

const AllArtists = props => {
    return(
        <ul className="all-artists">
            {props.artists.map(artist=><Artist {...artist}/>)}
        </ul>
    );
};

export default AllArtists;