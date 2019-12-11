import { connect } from "react-redux";
import VideoPlayer from './video_player';
import { findEpisode } from '../../actions/episodes_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {


    let videoId = ownProps.content[1];

    let video = state.entities.episodes[ownProps.content[1]] || {};

    return ({
        video: video,
        videoId: videoId
    });


};

const mapDispatchToProps = (dispatch) => {

    return ({
        findEpisode: (id) => dispatch(findEpisode(id)),
        closeModal: () => dispatch(closeModal())
    });

};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));