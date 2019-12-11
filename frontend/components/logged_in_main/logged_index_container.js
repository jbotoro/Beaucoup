import {connect} from 'react-redux';
import { findMovies, findMovie} from '../../actions/movies_actions'
import {findShows, findShow} from '../../actions/shows_actions';
import loggedInMain from './logged_index';
import { findEpisodes } from '../../actions/episodes_actions';
import { closeModal } from "../../actions/modal_actions";


const mapStateToProps = state => {
    let shows = Object.values(state.entities.shows) || [];
    let movies = Object.values(state.entities.movies) || [];
    let episodes = Object.values(state.entities.episodes) || [];
    
    return ({
        shows: shows,
        movies: movies,
        episodes: episodes,
        state: state
    })
};

const mapDispatchToProps = dispatch => ({
    findMovies: () => dispatch(findMovies()),
    findShows: () => dispatch(findShows()),
    findEpisodes: () => dispatch(findEpisodes()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(loggedInMain);