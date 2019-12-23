import { connect } from "react-redux";
import VideoPlayer from './video_player';

import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {




    return ({
        state: state
    });


};

const mapDispatchToProps = (dispatch) => {

    return ({
        closeModal: () => dispatch(closeModal())
    });

};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));