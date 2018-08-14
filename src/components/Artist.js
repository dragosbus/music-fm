import React from 'react';

const Artist = props => {
  
  return (
    <li
      className="artist"
      style={{ left: `${props.left + props.index * 160}px` }}
    >
      <img src={props.image[2]['#text']} />
      <p>{props.name}</p>
    </li>
  );
};

export default Artist;
