import merge from 'lodash.merge';
import { FETCH_MOVIES, FETCH_MOVIE} from '../actions/movies_actions'


export const moviesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case FETCH_MOVIE:
            return merge({}, state, action.movie)
        case FETCH_MOVIES:
            return merge({}, state, action.movies)
        default:
            return state;
    }
}