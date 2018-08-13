import React from 'react';
import Artist from './Artist';

const TopArtists = props => {
  return <Artist image={props.image} name={props.name} changeArtist={props.changeArtist} />;
};

export default TopArtists;
