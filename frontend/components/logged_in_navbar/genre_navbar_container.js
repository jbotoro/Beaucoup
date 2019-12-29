import { connect } from 'react-redux';
import GenreNavBar from './genre_navbar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { findGenres } from '../../actions/genres_actions'


const mapStateToProps = (state) => {
    let genres;
    genres = Object.values(state.entities.genres) || [];

    return ({
        state: state,
        genres: genres
    })

}
const mapDispatchToProps = dispatch => ({
    logout: user => dispatch(logout()),
    findGenres: () => dispatch(findGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreNavBar);