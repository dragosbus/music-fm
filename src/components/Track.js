import React from 'react';
import {FaAngleDown} from 'react-icons/fa';

const Track = props => {
    return(
        <li className="track">
            <img src={props.image[3]['#text']}/>
            <p>{props.name}</p>
            <FaAngleDown className="details-track"/>
        </li>
    );
};

export default Track;