import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';
import AllArtists from './components/AllArtists';
import TopTracks from './components/TopTracks';
import Details from './components/Details';

import * as Actions from './actions/actionsCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posLeft: 0,
      posLeftTracks: 0,
      showDetails: false,
      artistDetails: 0,
      showVideo: false
    };
    this.toggleDetails = this.toggleDetails.bind(this);
    this.changeArtistDetails = this.changeArtistDetails.bind(this);
    this.getVideo = this.getVideo.bind(this);
    this.hideVideo = this.hideVideo.bind(this);
  }

  componentDidMount() {
    //fetch data
    this.props.getArtists();
    this.props.getTracks();
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
    this.setState({
      posLeftTracks: this.state.posLeftTracks > -1800 + window.outerWidth ? this.state.posLeftTracks - 310 : 0
    });
  }

  prevTrack() {}

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  changeArtistDetails(index) {
    this.props.getArtistTopTracks(this.props.artists[index]['name']);
    this.setState({
      artistDetails: index
    });
  }

  getVideo(index) {
    this.setState({showVideo:true})
    let track = this.props.artistTopTracks[index]
    this.props.getVideoTrack(track.name);
    console.log(track)
  }

  hideVideo() {
    this.setState({showVideo: false});
  }

  render() {
    let { artists, searchTerm, tracks, setSearchTerm, artistTopTracks, videoTrack} = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <BrowserRouter basename='/music-fm/build'>
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
                      showDetails={this.state.showDetails}
                      toggleDetails={this.toggleDetails}
                      changeArtistDetails={this.changeArtistDetails}
                    />

                    <Details 
                      showDetails={this.state.showDetails} 
                      artist={artists[this.state.artistDetails]} artistTopTracks={artistTopTracks.slice(0,10)}
                      getVideo={this.getVideo}
                      videoTrack={videoTrack}
                      showVideo={this.state.showVideo}
                      hideVideo={this.hideVideo}
                    />

                    <TopTracks
                      tracks={tracks.slice(0, 10)}
                      nextTrack={this.nextTrack.bind(this)}
                      left={this.state.posLeftTracks}
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
  },
  getArtistTopTracks(artist) {
    dispatch(Actions.getArtistTopTracksMiddle(artist));
  },
  getVideoTrack(track) {
    dispatch(Actions.getVideoForTrack(track));
  }
});

const mapStateToProps = state => ({
  artists: state.artists,
  tracks: state.tracks,
  searchTerm: state.searchTerm,
  artistTopTracks: state.artistTopTracks,
  videoTrack: state.videoTrack
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
