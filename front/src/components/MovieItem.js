import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import {deleteMovie} from '../actions/actions'
import AddMovie from './AddMovie';
import { Button } from 'react-bootstrap'


const MovieItem = (props) => {
    return (
        <div>
            <img src={props.movie.image} alt='...'/>
            <h1>{props.movie.title}</h1>
            <h3>{props.movie.year}</h3>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.movie.rating}
            />
           <div className="button">
            <Button variant="primary" onClick={() => {props.deleteMovie(props.movie._id)}}>Delete</Button>

            <AddMovie addOrEdit={true} infos={props.movie}/>
            </div>
        </div>
    );
}




export default connect(null, { deleteMovie })(MovieItem);
