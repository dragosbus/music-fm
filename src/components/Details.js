import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Details = props => {
  let artist = props.artist;

  let details = props.showDetails ? (
    <div className="details">
      <img src={artist.image[3]['#text']} />
      <p>{artist.name}</p>
      <p>Listenters: {artist.listeners}</p>
      <p>Total Plays: {artist.playcount}</p>
      <ul className="top-tracks-artist">
        {props.artistTopTracks.map((track, i) => {
          return (
            <li>
              <img src={track.image[3]['#text']} />
              <p>{track.name}</p>
              <FaPlay className="play-music" onClick={() => props.getVideo(i)} />
            </li>
          );
        })}
      </ul>
      {props.showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${props.videoTrack}`}
          allow="autoplay"
          allowFullScreen
          frameBorder="0"
          modestbranding="1"
          className="video-track"
        />
      ) : (
        ''
      )}
      <button className="hide-video" onClick={props.hideVideo}>X</button>
    </div>
  ) : (
    ''
  );

  return details;
};

export default Details;
