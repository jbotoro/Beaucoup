import { connect } from 'react-redux';
import FeaturedShow from './featured_show';
import { findShow } from '../../../actions/shows_actions'
import { findEpisode, findEpisodes } from '../../../actions/episodes_actions'
import {openModal} from '../../../actions/modal_actions'

const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    // add openvideoplayer ??
    findShow: () => dispatch(findShow()),
    findEpisodes: () => dispatch(findEpisodes()),
    findEpisode: (id) => dispatch(findEpisode(id)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedShow)