import { connect } from "react-redux";
import {findEpisodes} from '../../actions/episodes_actions'
import {findShows} from '../../actions/shows_actions'
import SearchBar from './search';


const mapStateToProps = (state) => {
    let shows = Object.values(state.entities.shows) || []
    let episodes = Object.values(state.entities.episodes) || []
    let genres = Object.values(state.entities.genres) || []
    return ({
        shows: shows,
        episodes: episodes,
        genres: genres
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        findEpisodes: () => dispatch(findEpisodes()),
        findShows: () => dispatch(findShows())

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)