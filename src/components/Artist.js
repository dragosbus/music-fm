import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Artist = props => {
  let list =
    props.path === '/' ? (
      <li className="artist" style={{ left: `${props.left + props.index * 160}px` }} onMouseOver={props.changeArtistDetails}>
        <img src={props.image[2]['#text']} />
        <p>{props.name}</p>
        <FaAngleDown className="details-artist" onClick={props.toggleDetails} />
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
