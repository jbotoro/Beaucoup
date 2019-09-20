import { connect } from 'react-redux';
import { findMovie, findMovies } from '../../../actions/movies_actions';
import loggedInMovies from './logged_in_movies';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.videos.movies)
});


const mapDispatchToProps = dispatch => ({
    findMovie: (movie) => dispatch(findMovie(movie)),
    findMovies: () => dispatch(findMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(loggedInMovies);