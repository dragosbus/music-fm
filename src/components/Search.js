import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <form className="search-form" onSubmit={this.formSubmit}>
                <input type="text"/>
                <button>
                    <FaSearch/>
                </button>
            </form>
        );
    }
}

export default SearchForm;