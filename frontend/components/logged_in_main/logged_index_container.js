import {connect} from 'react-redux';
import { findMovies, findMovie} from '../../actions/movies_actions'
import {findShows, findShow} from '../../actions/shows_actions';
import loggedInMain from './logged_index';


const mapStateToProps = state => ({
    shows: Object.values(state.entities.videos.shows),
    movies: Object.values(state.entities.videos.movies),
    state: state
});

const mapDispatchToProps = dispatch => ({
    findMovie: (movie) => dispatch(findMovie(movie)),
    findMovies: () => dispatch(findMovies()),
    findShow: (show) => dispatch(findShow(show)),
    findShows: () => dispatch(findShows())
})

export default connect(mapStateToProps,mapDispatchToProps)(loggedInMain);