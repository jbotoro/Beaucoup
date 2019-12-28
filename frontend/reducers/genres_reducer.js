import { FETCH_GENRES, FETCH_GENRE } from '../actions/genres_actions'
import { merge } from 'lodash';

const GenresReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case FETCH_GENRES:
            return action.genres
        case FETCH_GENRE:
            let nextState = merge({}, state)
            let Genre = { [action.genre.id]: action.genre }
            return merge({}, nextState, Genre)
        default: return state;
    }
}
export default GenresReducer;