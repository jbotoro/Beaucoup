import { FETCH_EPISODE, FETCH_EPISODES } from '../actions/episodes_actions';
import merge from 'lodash.merge';

export const episodesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case FETCH_EPISODES:
            return merge({}, state, action.episodes);
        case FETCH_EPISODE:
            let episode = { [action.episode.id]: action.episode };
            return merge({}, state, episode);
        default: 
            return state;
    }
};