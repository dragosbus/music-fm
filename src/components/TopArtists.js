import React from 'react';
import Artist from './Artist';

class TopArtists extends React.Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return nextProps !== undefined;
  }
  render() {
    return (
      <Artist
        image={this.props.image}
        name={this.props.name}
        changeArtist={this.props.changeArtist}
      />
    );
  }
}

export default TopArtists;
