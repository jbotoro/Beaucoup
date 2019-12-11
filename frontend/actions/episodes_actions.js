import * as Util from '../util/episodes_api_util';
export const RECEIVE_EPISODE = "RECEIVE_EPISODE";
export const RECEIVE_ALL_EPISODES = "RECEIVE_ALL_EPISODES";


const receiveAllEpisodes = (episodes) => {

    return ({
        type: RECEIVE_ALL_EPISODES,
        episodes: episodes
    })
};

const receiveEpisode = (episode) => ({
    type: RECEIVE_EPISODE,
    episode: episode
});

export const findEpisode = (id) => (dispatch) => (
    Util.fetchEpisode(id).then((episode) => dispatch(receiveEpisode(episode)))
);

export const findEpisodes = () => (dispatch) => {

    return (
        Util.fetchAllEpisodes().then((episodes) => dispatch(receiveAllEpisodes(episodes)))
    )
};