import {connect} from 'react-redux'
import {findShows} from '../../actions/shows_actions'
import MyStuff from './my_stuff'
 

const mapStateToProps = (state) => {
    
    let episodes = Object.values(state.entities.episodes)
    let shows = Object.values(state.entities.shows)
    let userstuff = Object.values(state.entities.users)[0];
    let myStuff;
    if (userstuff.show_ids && episodes) {
        
        myStuff = shows.filter(show => userstuff.show_ids.includes(show.id))
        
        let myStuffids = myStuff.map( show => show.id)
        console.log(myStuffids)
        console.log(myStuff)
        
        episodes = episodes.filter(episode => myStuffids.includes(episode.show_id))
        
    }
    
  
    console.log(myStuff)
    return (
        {
            myStuff: myStuff,
            episodes: episodes
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        findShows: () => dispatch(findShows())
    })
    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(MyStuff)
