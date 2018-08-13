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

  changeArtist() {
    this.setState({
      index: this.state.index < this.props.topArtists.length - 1 ? this.state.index + 1 : 0
    });
  }

  render() {
    let image = this.props.topArtists[this.state.index] ? this.props.topArtists[this.state.index]['image'][2]['#text']: 'Unknown';
    let name = this.props.topArtists[this.state.index] ? this.props.topArtists[this.state.index]['name']: 'Unknown';
    
    return (
      <div className="App">
        <Header />
        <TopArtists
          image={image}
          name={name}
          changeArtist={this.changeArtist.bind(this)}
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
  topArtists: state.topArtists,
  topTracks: state.topTracks
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
