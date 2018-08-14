import React from 'react';

const Artist = props => {

  let styles = !props.mouseOver ? {left: `${props.left + props.index * 200}px`} : {left: `${props.left + props.index * 250}px`};

    return(
        <li className="artist" style={{left: `${props.left + props.index * 200}px`}}>
            <img src={props.image[2]['#text']}/>
            <p>{props.name}</p>
        </li>
    );
};

export default Artist;
