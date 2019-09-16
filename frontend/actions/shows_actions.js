import {fetchShows, fetchShow} from '../util/shows_api_util'


export const FETCH_SHOW = 'FETCH_SHOW';
export const FETCH_SHOWS = 'FETCH_SHOWS';
export const FETCH_ERRORS = 'FETCH_ERRORS'

const fetchShow = (show) => ({
    type: FETCH_SHOW,
    show
});

const fetchShows = (shows) => ({
    type: FETCH_SHOWS,
    shows
})

const fetchErrors = (errors) => ({
    type: FETCH_ERRORS,
    errors: errors.responseJSON
})


export const findShows = () => dispatch => (
    fetchShows()
        .then(shows => dispatch(fetchShows(shows)))
        .fail(errors => dispatch(fetchErrors(errors)))
)
export const findshow = (show) => dispatch => (
    fetchShow(show)
        .then(show => dispatch(fetchShow(show)))
        .fail(errors => dispatch(fetchErrors(errors)))
)