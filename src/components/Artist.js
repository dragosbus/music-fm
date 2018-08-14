import React from 'react';

const Artist = props => {

    return(
        <li className="artist" style={{left: `${props.left + props.index * 160}px`}}>
            <img src={props.image[3]['#text']}/>
            <p>{props.name}</p>
        </li>
    );
};

export default Artist;
