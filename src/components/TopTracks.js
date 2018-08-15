import React from 'react';
import Track from './Track';

const TopTracks = props => {
  return (
    <div>
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
