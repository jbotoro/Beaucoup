import {connect} from 'react-redux';
import loggedInNavBar from './logged_in_navbar';
import {logout} from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    loggedInNavBar: state
})
const mapDispatchToProps = dispatch => ({
    logout: user => dispatch(logout())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(loggedInNavBar));