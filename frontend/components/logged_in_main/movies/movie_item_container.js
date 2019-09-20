import {connect} from 'react-redux';
import movieItem from './movie_item';


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    // add openvideoplayer ??
})

export default connect(mapStateToProps,mapDispatchToProps)(movieItem)