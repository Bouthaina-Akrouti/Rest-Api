import { SEARCH_MOVIE, GET_MOVIES } from './types'
import axios from 'axios'

export const getMovies = () => dispatch => {
    axios.get('/api')
        .then(res => dispatch({
            type: GET_MOVIES,
            payload: res.data
        }))
}


export const addMovie = newMovie => dispatch => {
    axios.post('/api', newMovie)
        dispatch(getMovies())
}

export const deleteMovie = id => dispatch => {
    axios.delete(`/api/${id}`)
        dispatch(getMovies())
     
}

export const editMovie = (id, updatedMovie) => dispatch => {
    axios.put(`/api/${id}`, updatedMovie)
    dispatch(getMovies())

}
export const searchMovie = (aq) => {
    return{
        type: SEARCH_MOVIE,
        payload: aq
    }
}