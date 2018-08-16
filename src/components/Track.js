import React from 'react';


const Track = props => {
    return(
        <li className="track" style={{ left: `${props.left + props.index * 160}px`}}>
            <img src={props.image[3]['#text']}/>
            <p>{props.name}</p>
        </li>
    );
};

export default Track;