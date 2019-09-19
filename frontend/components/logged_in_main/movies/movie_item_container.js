import {connect} from 'react-redux';
import movieItem from './movie_item';


const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(movieItem)