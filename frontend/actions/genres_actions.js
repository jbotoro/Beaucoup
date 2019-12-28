import {fetchGenre, fetchGenres} from '../util/genres_api_util'

export const FETCH_GENRE = 'FETCH_GENRE';
export const FETCH_GENRES = 'FETCH_GENRES';


const getGenres = (genres) => ({
    type: FETCH_GENRES,
    genres: genres
})

const getGenre = (genre) => ({
    type: FETCH_GENRE,
    genre: genre
})


export const findGenre = (id) => (dispatch) => {
    fetchGenre(id).then((genre) => dispatch(getGenre(genre)))
}

export const findGenres = () => (dispatch) => {
    fetchGenres().then((genres) => dispatch(getGenres(genres)))
}