import React from 'react';

const Details = props => {
  let artist = props.artist;

  let details = props.showDetails ? (
    <div className="details">
      <img src={artist.image[3]['#text']} />
      <p>{artist.name}</p>
      <p>Listenters: {artist.listeners}</p>
      <p>Total Plays: {artist.playcount}</p>
      <ul>
          {props.artistTopTracks.map(track=>{
              return <li>{track.name}</li>
          })}
      </ul>
    </div>
  ) : (
    ''
  );

  return details;
};

export default Details;
