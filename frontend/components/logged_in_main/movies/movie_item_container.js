import {connect} from 'react-redux';
import movieItem from './movie_item';
import {openModal} from '../../../actions/modal_actions'


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    // add openvideoplayer ??
    openModal: (modal, id) => dispatch(openModal(modal, id))
})

export default connect(mapStateToProps,mapDispatchToProps)(movieItem)