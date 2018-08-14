import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './Search';

const Header = (props) => (
  <header className="main-header">
    <h1 className="logo">
      <Link to='/'>Music</Link>
    </h1>
    <SearchForm setSearchTerm={props.setSearchTerm}/>
  </header>
);

export default Header;
