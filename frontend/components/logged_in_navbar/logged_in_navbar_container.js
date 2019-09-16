import {connect} from 'react-redux';
import loggedInNavBar from './logged_in_navbar';
import {logout} from '../../actions/session_actions';


const mapStateToProps = state => ({
    NavBar: state
})
const mapDispatchToProps = dispatch => ({
    logout: user => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(loggedInNavBar);