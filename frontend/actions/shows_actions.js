import {fetchShows, fetchShow} from '../util/shows_api_util';


export const FETCH_SHOW = 'FETCH_SHOW';
export const FETCH_SHOWS = 'FETCH_SHOWS';
export const FETCH_ERRORS = 'FETCH_ERRORS'




const getShow = (show) => ({
    type: FETCH_SHOW,
    show
});

const getShows = (shows) => ({
    type: FETCH_SHOWS,
    shows
})

const fetchErrors = (errors) => ({
    type: FETCH_ERRORS,
    errors: errors.responseJSON
})


export const findShows = () => dispatch => (
    fetchShows()
        .then(shows => dispatch(getShows(shows)))
        .fail(errors => dispatch(fetchErrors(errors)))
)
export const findShow = (show) => dispatch => (
    fetchShow(show)
        .then( show =>dispatch(getShow(show)))
        .fail(errors => dispatch(fetchErrors(errors)))
)