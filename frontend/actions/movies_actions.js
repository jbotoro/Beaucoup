import {fetchMovie, fetchMovies} from '../util/movies_api_util';


export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_ERRORS = 'FETCH_ERRORS'

const fetchMovie = (movie) => ({
    type: FETCH_MOVIE,
    movie
});

const fetchMovies = (movies) => ({
    type: FETCH_MOVIES,
    movies
})

const fetchErrors = (errors) => ({
    type: FETCH_ERRORS,
    errors: errors.responseJSON
})


export const findMovies = () => dispatch => (
    fetchMovies()
    .then(movies => dispatch(fetchMovies(movies)))
    .fail(errors => dispatch(fetchErrors(errors)))
)
export const findMovie = (movie) => dispatch => (
    fetchMovie(movie)
    .then(movie => dispatch(fetchMovie(movie)))
    .fail(errors => dispatch(fetchErrors(errors)))
)