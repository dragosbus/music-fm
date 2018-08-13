import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form className="search-form">
                <input type="text"/>
                <button>
                    <FaSearch/>
                </button>
            </form>
        );
    }
}

export default SearchForm;