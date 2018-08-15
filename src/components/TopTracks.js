import React from 'react';
import Track from './Track';

const TopTracks = props => {
  return (
    <div className="tracks">
        <h2>Top Tracks</h2>
      <ul className="top-tracks"  onClick={props.nextTrack}>
        {props.tracks.map(track => (
          <Track {...track} />
        ))}
      </ul>
      <button onClick={props.nextTrack}>
        next
      </button>
    </div>
  );
};

export default TopTracks;
