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
      posLeft: 0
    }
  }

  componentDidMount() {
    this.props.getTopArtists();
  }

  nextTop() {
    this.setState({
      posLeft: this.state.posLeft > -1600 + window.outerWidth ? this.state.posLeft - 320 : 0
    });
  }

  prevTop() {
    this.setState({
      posLeft: this.state.posLeft < 0 ? this.state.posLeft + 320 : -1660 + window.outerWidth
    });
  }

  render() {

    let {topArtists} = this.props;

    return (
      <div className="App">
        <Header />
        <TopArtists
          topArtists={topArtists}
          nextArtist={this.nextTop.bind(this)}
          prevArtist={this.prevTop.bind(this)}
          left={this.state.posLeft}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTopArtists() {
    dispatch(Actions.getTopArtistsMiddle())
  },
  
});

const mapStateToProps = state => ({
  topArtists: state.topArtists,
  topTracks: state.topTracks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
