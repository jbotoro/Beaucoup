import {connect} from 'react-redux';
import NavBar from './navbar';
import {openModal} from '../modal/modal';

const mapStateToProps = state => ({
    NavBar: state
})

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})


export default connect(mapStateToProps,mapDispatchToProps)(NavBar);