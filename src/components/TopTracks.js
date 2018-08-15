import React from 'react';
import Track from './Track';

const TopTracks = props => {
  return (
    <div className="tracks">
        <h2>Top Tracks</h2>
      <ul style={{position:'absolute', left: props.left}} className="top-tracks"  onClick={props.nextTrack}>
        {props.tracks.map(track => (
          <Track {...track} />
        ))}
      </ul>
      <button onClick={props.nextTrack} className="next-track">
        next
      </button>
    </div>
  );
};

export default TopTracks;
