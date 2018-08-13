import React, { Component } from 'react';
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
        console.log(res.artists.artist)
        this.setState(prevState=>({
          topTenArtists: prevState.topTenArtists.concat(res.artists.artist)
        }))
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TopArtists
          topArtists={this.state.topTenArtists}
        />
      </div>
    );
  }
}

export default App;
