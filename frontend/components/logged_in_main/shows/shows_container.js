import {connect} from 'react-redux';
import {findShow, findShows} from '../../../actions/shows_actions';
import loggedInShows from './logged_in_shows';

const mapStateToProps = state => ({
    shows: Object.values(state.entities.videos.shows)
});


const mapDispatchToProps = dispatch => ({
    findShow: (show) => dispatch(findShow(show)),
    findShows: () => dispatch(findShows())
})

export default connect(mapStateToProps,mapDispatchToProps)(loggedInShows);