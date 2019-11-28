import React, { Component } from 'react';

export class Search extends Component {
    render() {
        return (
            <div>
                
                <button onClick={this.props.search}>Search</button>
            </div>
        );
    }
}

export default Search;
