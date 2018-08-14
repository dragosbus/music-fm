import React from 'react';
import Artist from './Artist';

const TopArtists = props => {

  return (
    <div className="top-artists">
      <h2>Top Artists</h2>
      <ul className="artists-list">
        {props.topArtists.map((artist, i) => (
          <Artist key={artist.mbid} {...artist} index={i} left={props.left} mouseOver={props.mouseOver} toggleOver={props.toggleOver}/>
        ))}
      </ul>
      <button className="next" onClick={props.nextArtist}>next</button>
    </div>
  );
};

export default TopArtists;
