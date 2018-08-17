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
      <iframe
        src={`https://www.youtube.com/embed/${props.videoTrack}`}
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
        modestbranding="1"
        className="video-track"
      />
    </div>
  ) : (
    ''
  );

  return details;
};

export default Details;
