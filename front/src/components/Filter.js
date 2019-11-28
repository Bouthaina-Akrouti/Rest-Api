import React, { Component } from 'react'
import Search from './Search'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import {searchMovie} from '../actions/actions'


class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            keyword: ''
        }
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, () => this.props.search({rating: this.state.rating, keyword: this.state.keyword}));
      }
      handleChange = x => {
          this.setState({
              keyword: x
          }, () => this.props.search({rating: this.state.rating, keyword: this.state.keyword}))
      }
      render(){
          return(
            <div>
                <input onChange={e => this.handleChange(e.target.value)} type='text' placeholder="Search..."/>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        )
      }
}


const mapDispatchToProps = dispatch => {
    return{
        search: rating => dispatch(searchMovie(rating))
    }
}

export default connect(null, mapDispatchToProps)(Filter);