import React from 'react';

const Details = props => {
  let artist = props.artist;

  let details = props.showDetails ? (
    <div className="details">
      <img src={artist.image[3]['#text']} />
      <p>{artist.name}</p>
    </div>
  ) : (
    ''
  );

  return details;
};

export default Details;
