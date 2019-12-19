import { FETCH_EPISODE, FETCH_EPISODES } from '../actions/episodes_actions';
import merge from 'lodash.merge';

const episodesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case FETCH_EPISODES:
            return merge({}, state, action.episodes);
        case FETCH_EPISODE:
            let episode = { [action.episode.id]: action.episode };
            let newState = merge({}, state)
            return merge({}, newState, episode);
        default: 
            return state;
    }
};

export default episodesReducer