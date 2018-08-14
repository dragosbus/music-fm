import React from 'react';
import Artist from './Artist';
import { Link } from 'react-router-dom';

const TopArtists = props => {
  return (
    <div className="top-artists">
      <h2>Top Artists</h2>
      <button className="prev" onClick={props.prevArtist}>
        prev
      </button>
      <ul className="artists-list">
        {props.topArtists.map((artist, i) => (
          <Artist path='/' key={artist.mbid} {...artist} index={i} left={props.left} />
        ))}
        <li className="artist see-all" style={{ left: `${props.left + 10 * 160}px` }} onClick={props.seeAllArtists}>
          <Link to="/artists">See All</Link>
        </li>
      </ul>
      <button className="next" onClick={props.nextArtist}>
        next
      </button>
    </div>
  );
};

export default TopArtists;
