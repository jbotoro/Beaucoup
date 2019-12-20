import { connect } from 'react-redux';
import FeaturedShow from './featured_show';
import { findShow } from '../../../actions/shows_actions'
import { findEpisode, findEpisodes } from '../../../actions/episodes_actions'


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    // add openvideoplayer ??
    findShow: () => dispatch(findShow()),
    findEpisodes: () => dispatch(findEpisodes()),
    findEpisode: (id) => dispatch(findEpisode(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedShow)