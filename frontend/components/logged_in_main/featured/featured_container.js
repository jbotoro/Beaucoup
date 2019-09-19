import { connect } from 'react-redux';
import { fetchMovie, fetchMovies } from '../../../actions/movies_actions';
import {fetchShow, fetchShows} from '../../../actions/shows_actions';
import loggedInFeatured from './logged_in_featured';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.videos.movies),
    shows: Object.values(state.entities.videos.shows)
});


const mapDispatchToProps = dispatch => ({
    fetchMovie: (movie) => dispatch(fetchMovie(movie)),
    fetchMovies: () => dispatch(fetchMovies()),
    fetchShow: (show) => dispatch(fetchShow(show)),
    fetchShows: () => dispatch(fetchShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(loggedInFeatured);