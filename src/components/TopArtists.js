import React from 'react';
import Artist from './Artist';

const TopArtists = props => {
  return <Artist image={props.image} name={props.name} changePrevArtist={props.changePrevArtist} changeNextArtist={props.changeNextArtist}/>;
};

export default TopArtists;
