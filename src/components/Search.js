import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.changeSearchTerm = this.changeSearchTerm.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.setSearchTerm(this.state.value)
    }

    changeSearchTerm(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return(
            <form className="search-form" onSubmit={this.formSubmit}>
                <input type="text" value={this.state.value} onChange={this.changeSearchTerm}/>
                <button>
                    <FaSearch/>
                </button>
            </form>
        );
    }
}

export default SearchForm;