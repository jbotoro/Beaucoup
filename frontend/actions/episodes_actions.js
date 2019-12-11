import { fetchEpisode, fetchEpisodes } from '../util/episodes_api_util';


export const FETCH_EPISODE = 'FETCH_EPISODE';
export const FETCH_EPISODES = 'FETCH_EPISODES';
export const FETCH_ERRORS = 'FETCH_ERRORS'

const getEpisode = (episode) => ({
    type: FETCH_EPISODE,
    episode: episode
});

const getAllEpisodes = (episodes) => ({
    type: FETCH_EPISODES,
    episodes: episodes
})

const fetchErrors = (errors) => ({
    type: FETCH_ERRORS,
    errors: errors.responseJSON
})


export const findEpisodes = () => dispatch => (
    fetchEpisodes()
        .then(episodes => dispatch(getAllEpisodes(episodes)))
        .fail(errors => dispatch(fetchErrors(errors)))
)
export const findEpisode = (episode) => dispatch => (
    fetchEpisode(episode)
        .then(episode => dispatch(getEpisode(episode)))
        .fail(errors => dispatch(fetchErrors(errors)))
)