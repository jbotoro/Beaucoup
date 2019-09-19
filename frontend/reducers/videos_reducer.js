import {combineReducers} from 'redux';
import {showsReducer} from './shows_reducer';
import {moviesReducer} from './movies_reducer';


export default combineReducers({
    movies: moviesReducer,
    shows: showsReducer
});