import { connect } from "react-redux";
import {findEpisodes} from '../../actions/episodes_actions'
import {findShows} from '../../actions/shows_actions'


const mapStateToProps = (state) => {
    let shows = Object.values(state.entities.shows) || []
    let episodes = Object.values(state.entities.episodes) || []
    return ({
        shows: shows,
        episodes: episodes
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        findEpisodes: () => dispatch(findEpisodes()),
        findShows: () => dispatch(findShows())

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(/*/put in component here*/)