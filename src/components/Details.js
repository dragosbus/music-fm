import React from 'react';

const Details = props => {
  let artist = props.artist;

  let details = props.showDetails ? (
    <div className="details">
      <img src={artist.image[3]['#text']} />
      <p>{artist.name}</p>
      <p>Listenters: {artist.listeners}</p>
      <p>Total Plays: {artist.playcount}</p>
      <ul className="top-tracks-artist">
          {props.artistTopTracks.map(track=>{
              return (
                <li>
                    <img src={track.image[3]['#text']}/>
                    <p>{track.name}</p>
                </li>
              );
          })}
      </ul>
    </div>
  ) : (
    ''
  );

  return details;
};

export default Details;
