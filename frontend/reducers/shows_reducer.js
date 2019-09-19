import merge from 'lodash.merge';
import { FETCH_SHOWS, FETCH_SHOW } from '../actions/shows_actions'


export const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case FETCH_SHOW:
           return merge({}, state, action.show) 
        case FETCH_SHOWS:
            return merge({}, state, action.shows)
        default:
            return state;
    }
}

