import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';
import AllArtists from './components/AllArtists';

import * as Actions from './actions/actionsCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posLeft: 0
    };
  }

  componentDidMount() {
    this.props.getArtists();
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

  render() {
    let { artists, searchTerm, setSearchTerm } = this.props;
    console.log(this.props);
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
                  <TopArtists
                    topArtists={artists.slice(0, 10)}
                    nextArtist={this.nextTop.bind(this)}
                    prevArtist={this.prevTop.bind(this)}
                    left={this.state.posLeft}
                  />
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
