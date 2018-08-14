import React from 'react';

const Artist = props => {
  let list =
    props.path === '/' ? (
      <li className="artist" style={{ left: `${props.left + props.index * 160}px` }}>
        <img src={props.image[2]['#text']} />
        <p>{props.name}</p>
      </li>
    ) : (
      <li className="artist-all">
        <img src={props.image[2]['#text']} />
        <p>{props.name}</p>
      </li>
    );

  return list;
};

export default Artist;
