import {connect} from 'react-redux';
import {fetchShow, fetchShows} from '../../../actions/shows_actions';
import loggedInShows from './logged_in_shows';

const mapStateToProps = state => ({
    shows: Object.values(state.entities.videos.shows)
});


const mapDispatchToProps = dispatch => ({
    fetchShow: (show) => dispatch(fetchShow(show)),
    fetchShows: () => dispatch(fetchShows())
})

export default connect(mapStateToProps,mapDispatchToProps)(loggedInShows);