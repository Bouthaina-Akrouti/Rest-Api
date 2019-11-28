import React, { Component } from 'react';
import MovieItem from './MovieItem'
import { connect } from 'react-redux';
import { getMovies } from '../actions/actions'

class MovieList extends Component {
    componentDidMount() {
        this.props.getMovies()
    }
    
    render(){
        return (
            <div className="movie-list">
                {
                    this.props.movies.movies.map(el => <MovieItem movie={el}/>)
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        movies: state.movies
    }
}
export default connect(mapStateToProps, { getMovies })(MovieList);
