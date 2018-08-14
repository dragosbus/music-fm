import React from 'react';

const Artist = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.changePrevArtist}>prev</button>
      <div>
        <img src={props.image} />
        <p>{props.name}</p>
      </div>
      <button onClick={props.changeNextArtist}>next</button>
    </div>
  );
};

export default Artist;
