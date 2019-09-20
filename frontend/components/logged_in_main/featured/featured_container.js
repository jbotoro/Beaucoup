import { connect } from 'react-redux';
import { findMovie, findMovies } from '../../../actions/movies_actions';
import {findShow, findShows} from '../../../actions/shows_actions';
import loggedInFeatured from './logged_in_featured';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.videos.movies),
    shows: Object.values(state.entities.videos.shows)
});


const mapDispatchToProps = dispatch => ({
    findMovies: () => dispatch(findMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(loggedInFeatured);