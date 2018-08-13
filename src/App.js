import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTenArtists: []
    }
  }

  componentDidMount() {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10`)
      .then(res=>res.json())
      .then(res=>{
        this.setState(prevState=>({
          topTenArtists: prevState.topTenArtists.concat(res.artists.artist)
        }));
      });
    // fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`)
    //   .then(res=>res.json())
    //   .then(res=>console.log(res))
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

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
