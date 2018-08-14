import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './Search';

const Header = () => (
  <header className="main-header">
    <h1 className="logo">
      <Link to='/'>Music</Link>
    </h1>
    <SearchForm />
    {/* <div className="intro">
        <h2>Name any song in seconds</h2>
    </div> */}
  </header>
);

export default Header;
