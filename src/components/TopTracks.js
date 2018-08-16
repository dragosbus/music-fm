import React from 'react';
import Track from './Track';

class TopTracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="top-tracks">
        <h2>Top Tracks</h2>
        <ul className="tracks">
          {this.props.tracks.map((track, i) => (
            <Track
              key={i}
              {...track}
              index={i}
              left={this.props.left}
            />
          ))}
        </ul>
        <button onClick={this.props.nextTrack} className="next-track">
          next
        </button>
      </div>
    );
  }
}

export default TopTracks;
