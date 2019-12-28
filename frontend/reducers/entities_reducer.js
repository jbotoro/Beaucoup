import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import { showsReducer } from './shows_reducer';
import { moviesReducer } from './movies_reducer';
import episodesReducer from './episodes_reducer';
import genresReducer from './genres_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    shows: showsReducer,
    movies: moviesReducer,
    episodes: episodesReducer,
    genres: genresReducer
})

export default entitiesReducer;