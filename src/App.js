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
      topTenArtists: []
    }
  }

  componentDidMount() {
    this.props.getTopArtists()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TopArtists
          artists={this.state.topTenArtists}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTopArtists() {
    dispatch(Actions.getTopArtistsMiddle())
  }
});

const mapStateToProps = state => ({
  topAtists: state.topArtists,
  topTracks: state.topTracks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
