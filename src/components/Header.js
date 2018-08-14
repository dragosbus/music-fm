import React from 'react';
import SearchForm from './Search';

const Header = () => (
  <header className="main-header">
    <h1 className="logo">Music</h1>
    <SearchForm />
    {/* <div className="intro">
        <h2>Name any song in seconds</h2>
    </div> */}
  </header>
);

export default Header;
