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
    this.props.getTopArtists();
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
    let { topArtists } = this.props;

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={() => (
                <TopArtists
                  topArtists={topArtists}
                  nextArtist={this.nextTop.bind(this)}
                  prevArtist={this.prevTop.bind(this)}
                  left={this.state.posLeft}
                />
              )}
            />
            <Route path='/artists' render={()=> <AllArtists artists={topArtists}/>}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTopArtists() {
    dispatch(Actions.getTopArtistsMiddle());
  }
});

const mapStateToProps = state => ({
  topArtists: state.topArtists,
  topTracks: state.topTracks
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
