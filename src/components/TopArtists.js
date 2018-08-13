import React from 'react';

const TopArtists = props => {
    console.log(props.artists[0])
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
};

export default TopArtists;
