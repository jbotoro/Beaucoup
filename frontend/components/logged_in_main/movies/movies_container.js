import { connect } from 'react-redux';
import { fetchMovie, fetchMovies } from '../../../actions/movies_actions';
import loggedInMovies from './logged_in_movies';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.videos.movies)
});


const mapDispatchToProps = dispatch => ({
    fetchMovie: (movie) => dispatch(fetchMovie(movie)),
    fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(loggedInMovies);