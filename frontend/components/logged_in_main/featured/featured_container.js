import { connect } from 'react-redux';
import { findMovie, findMovies } from '../../../actions/movies_actions';
import {findShow, findShows} from '../../../actions/shows_actions';
import loggedInFeatured from './logged_in_featured';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.videos.movies),
    shows: Object.values(state.entities.videos.shows)
});


const mapDispatchToProps = dispatch => ({
    findMovie: (movie) => dispatch(findMovie(movie)),
    findMovies: () => dispatch(findMovies()),
    findShow: (show) => dispatch(findShow(show)),
    findShows: () => dispatch(findShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(loggedInFeatured);