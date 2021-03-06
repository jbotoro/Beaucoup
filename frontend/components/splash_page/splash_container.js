import {connect} from 'react-redux';
import { openModal} from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = state => ({
    state: {}
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});


export default connect(mapStateToProps,mapDispatchToProps)(Splash);
