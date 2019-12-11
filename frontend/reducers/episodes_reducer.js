import { RECEIVE_EPISODE, RECEIVE_ALL_EPISODES } from '../actions/episodes_actions';
import { merge } from 'lodash';

export const EpisodesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EPISODES:
            return merge({}, state, action.episodes);
        case RECEIVE_EPISODE:
            let episode = { [action.episode.id]: action.episode };
            let nextState = merge({}, state);
            return merge({}, nextState, episode);
        default: 
            return state;
    }
};