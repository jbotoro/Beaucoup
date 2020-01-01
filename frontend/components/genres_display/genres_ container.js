import {connect} from 'react-redux'
import Genres from './genres';
import {findGenre} from '../../actions/genres_actions';
import {findEpisodes} from '../../actions/episodes_actions'
import {withRouter} from 'react-router-dom';
import {findShows} from '../../actions/shows_actions';


const mapStateToProps = (state, ownProps) => {
    let genreID = ownProps.match.params.genreId
    let genre = state.entities.genres[genreID]
    let showlist = Object.values(state.entities.shows)
    let episodes = Object.values(state.entities.episodes)
    let shows = Object.values(state.entities.shows)
    let chosenshows = [];
    let x = 1
    
    
    if (genre && genre.show_ids.length > 0 && Object.keys(showlist).length > 0 && x === 1) {
        
        
        genre.show_ids.forEach((id) => {
            
            if (chosenshows.includes(showlist[id - 1]) || showlist[id - 1] === undefined) {
                
                
            }  else if (!chosenshows.includes(showlist[id - 1])) {
                
                chosenshows.push(showlist[id - 1]);
            } else {
            
            }
            

        });
        x += 1
        
    }

    return ({
        genre: genre,
        shows: chosenshows,
        state: state,
        episodes: episodes

    })
}

const mapDispatchToProps = (dispatch) => {

    return ({
        findGenre: (genre) => dispatch(findGenre(genre)),
        // findEpisodes: () => dispatch(findEpisodes()),
        // findShows: () => dispatch(findShows())
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)