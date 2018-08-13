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

    let {indexTopArtist, getNextTopArtist} = this.props;

    let image = this.props.topArtists[indexTopArtist] ? this.props.topArtists[indexTopArtist]['image'][2]['#text']: 'Unknown';
    let name = this.props.topArtists[indexTopArtist] ? this.props.topArtists[indexTopArtist]['name']: 'Unknown';

    return (
      <div className="App">
        <Header />
        <TopArtists
          image={image}
          name={name}
          changeArtist={getNextTopArtist(indexTopArtist)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTopArtists() {
    dispatch(Actions.getTopArtistsMiddle())
  },
  getNextTopArtist(index) {
    dispatch(Actions.getNextTopArtist(index))
  },
  getPrevTopArtist(index) {
    dispatch(Actions.getPrevTopArtist(index));
  }
});

const mapStateToProps = state => ({
  topArtists: state.topArtists,
  topTracks: state.topTracks,
  indexTopArtist: state.indexTopArtist
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
