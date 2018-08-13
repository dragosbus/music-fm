import React from 'react';

const TopArtists = props => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
};

export default TopArtists;
