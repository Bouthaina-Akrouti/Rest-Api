import { SEARCH_MOVIE, GET_MOVIES } from '../actions/types'

const initialState = {
    movies: [],
    toFilter: []
}
    
const MovieReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIES:
            return {...state, movies: action.payload, toFilter: action.payload}
        case SEARCH_MOVIE:
            return {
                ...state,
                movies: state.toFilter.filter(el => el.rating >= action.payload.rating && el.title.toUpperCase().includes(action.payload.keyword.toUpperCase().trim()))
            }
            default:
            return state
    }
}
export default MovieReducer