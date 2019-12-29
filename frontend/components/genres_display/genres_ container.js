import {connect} from 'react-redux'
import Genres from './genres';
import {findGenre} from '../../actions/genres_actions';
import {findEpisodes} from '../../actions/episodes_actions'


const mapStateToProps = (state, ownProps) => {
    let genreID = ownProps.match.params.genreId
    let genre = state.entities.genres[genreID]

    let shows = []

    if (genre && genre.show_ids.length > 0 && 
        Object.keys(state.entities.shows).length > 0) {

        genre.show_ids.forEach((id) => {
            if(state.entities.shows[id] !== undefined) {
                shows.push(state.entities.shows[id])
            }
        })
    }


    return({
        shows: shows,
        genre: genre
    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        findGenre: (genre) => dispatch(findGenre(genre)),
        findEpisodes: () => dispatch(findEpisodes())
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)