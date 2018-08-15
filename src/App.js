import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';
import AllArtists from './components/AllArtists';
import TopTracks from './components/TopTracks';

import * as Actions from './actions/actionsCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posLeft: 0,
      tracksPerPage: 0,
      pageTrack: 1
    };
  }

  componentDidMount() {
    //fetch data
    this.props.getArtists();
    this.props.getTracks();
    //set how many tracks should pe on the page depend of the viewport
    if(window.outerWidth > 0 && window.outerWidth <= 560) {
      this.setState({tracksPerPage: 2});
    } else if(window.outerWidth > 560 && window.outerWidth <= 760) {
      this.setState({tracksPerPage: 3});
    } else if(window.outerWidth > 760 && window.outerWidth <= 960) {
      this.setState({tracksPerPage: 4});
    } else {
      this.setState({tracksPerPage: 5});
    }
  }

  nextTop() {
    this.setState({
      posLeft: this.state.posLeft > -1800 + window.outerWidth ? this.state.posLeft - 310 : 0
    });
  }

  prevTop() {
    this.setState({
      posLeft: this.state.posLeft < 0 ? this.state.posLeft + 310 : -1860 + window.outerWidth
    });
  }

  nextTrack() {
    this.setState({pageTrack: this.state.pageTrack * this.state.tracksPerPage < this.props.tracks.length ? this.state.pageTrack + 1 : 1})
  }

  render() {
    let { artists, searchTerm, tracks, setSearchTerm } = this.props;
    let {pageTrack, tracksPerPage} = this.state;
    
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header setSearchTerm={setSearchTerm} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <TopArtists
                      topArtists={artists.slice(0, 10)}
                      nextArtist={this.nextTop.bind(this)}
                      prevArtist={this.prevTop.bind(this)}
                      left={this.state.posLeft}
                    />
                    
                    <TopTracks 
                      tracks={tracks.slice((pageTrack-1) * tracksPerPage, pageTrack * tracksPerPage)} 
                      nextTrack={this.nextTrack.bind(this)} 
                    />
                  </div>
                )}
              />
              <Route path="/artists" render={() => <AllArtists artists={artists} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtists() {
    dispatch(Actions.getArtistsMiddle());
  },
  getTracks() {
    dispatch(Actions.getTracksMiddle());
  },
  setSearchTerm(term) {
    dispatch(Actions.searchTerm(term));
  }
});

const mapStateToProps = state => ({
  artists: state.artists,
  tracks: state.tracks,
  searchTerm: state.searchTerm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
