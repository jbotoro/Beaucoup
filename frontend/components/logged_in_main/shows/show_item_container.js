import { connect } from 'react-redux';
import showItem from './show_item';


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
 // add openvideoplayer ??
})

export default connect(mapStateToProps, mapDispatchToProps)(showItem)