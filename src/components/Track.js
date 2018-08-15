import React from 'react';

const Track = props => {
    return(
        <li className="track">
            <img src={props.image[3]['#text']}/>
            <p>{props.name}</p>
        </li>
    );
};

export default Track;