import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';

import * as Actions from './actions/actionsCreators';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    this.props.getTopArtists();
  }

  render() {

    let {topArtists, indexTopArtist, getNextTopArtist, getPrevTopArtist} = this.props;
    
    let image = topArtists[indexTopArtist] ? topArtists[indexTopArtist]['image'][2]['#text']: 'Unknown';
    let name = topArtists[indexTopArtist] ? topArtists[indexTopArtist]['name']: 'Unknown';

    return (
      <div className="App">
        <Header />
        <TopArtists
          image={image}
          name={name}
          changeNextArtist={getNextTopArtist}
          changePrevArtist={getPrevTopArtist}
          maxLen={topArtists.length - 1}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTopArtists() {
    dispatch(Actions.getTopArtistsMiddle())
  },
  getNextTopArtist(maxLen) {
    dispatch(Actions.getNextTopArtist(maxLen))
  },
  getPrevTopArtist(maxLen) {
    dispatch(Actions.getPrevTopArtist(maxLen));
  }
});

const mapStateToProps = state => ({
  topArtists: state.topArtists,
  topTracks: state.topTracks,
  indexTopArtist: state.indexTopArtist
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
