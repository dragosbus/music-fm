import React from 'react';
import {FaAngleDown} from 'react-icons/fa';

const Track = props => {
    return(
        <li className="track" style={{ left: `${props.left + props.index * 160}px`}}>
            <img src={props.image[3]['#text']}/>
            <p>{props.name}</p>
            <FaAngleDown className="details-track"/>
        </li>
    );
};

export default Track;