import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import TopArtists from './components/TopArtists';

const API_KEY = "79dd06bbb5fb8bcd9dcaed15ebeafe97";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTenArtists: [],
      posLeft: 0
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

  nextTop() {
    this.setState({
      posLeft: this.state.posLeft > -1650 ? this.state.posLeft - 240 : 0
    });
  }

  prevTop() {
    this.setState({
      posLeft: this.state.posLeft < 0 ? this.state.posLeft + 240 : -1660
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TopArtists
          topArtists={this.state.topTenArtists}
          nextArtist={this.nextTop.bind(this)}
          prevArtist={this.prevTop.bind(this)}
          left={this.state.posLeft}
        />
      </div>
    );
  }
}

export default App;
