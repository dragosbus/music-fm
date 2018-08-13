import React from 'react';

const Artist = props => {
  return (
    <div onClick={props.changeArtist}>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
};

export default Artist;
