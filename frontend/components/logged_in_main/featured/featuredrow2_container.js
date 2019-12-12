import { connect } from "react-redux";
// import SecondRow from './secondrow';
import { getEpisode } from "../../../actions/episodes_actions";



const mapStateToProps = (state) => {


    let episodes = Object.values(state.entities.episodes);

    return {

        episodes: episodes

    };


};

const mapDispatchToProps = (dispatch) => {

    return {
        getEpisode: (id) => dispatch(getEpisode(id))
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(SecondRow);