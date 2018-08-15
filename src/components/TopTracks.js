import React from 'react';
import Track from './Track';

const TopTracks = props => {
  return (
    <div className="top-tracks">
        <h2>Top Tracks</h2>
      <ul className="tracks">
        {props.tracks.map((track, i) => (
          <Track {...track} index={i} left={props.left}/>
        ))}
      </ul>
      <button onClick={props.nextTrack} className="next-track">
        next
      </button>
    </div>
  );
};

export default TopTracks;
