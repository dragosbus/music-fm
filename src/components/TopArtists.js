import React from 'react';
import Artist from './Artist';

const TopArtists = props => {
  return <Artist image={props.image} name={props.name} changePrevArtist={()=>props.changePrevArtist(props.maxLen)} changeNextArtist={()=>props.changeNextArtist(props.maxLen)}/>;
};

export default TopArtists;
