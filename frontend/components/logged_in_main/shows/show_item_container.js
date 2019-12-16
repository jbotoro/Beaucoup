import { connect } from 'react-redux';
import showItem from './show_item';
import {findShow, findShows} from '../../../actions/shows_actions'


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
 // add openvideoplayer ??
    findShow: () => findShow()
})

export default connect(mapStateToProps, mapDispatchToProps)(showItem)