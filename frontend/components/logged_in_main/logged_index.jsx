import React from 'react';
import ShowItem from './shows/show_item_container'


class LoggedInMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
     
        }
   }

    componentDidMount() {
        this.props.findShows();
        this.props.findMovies();
        this.props.findEpisodes();

    }

    




    render () {
      
        let shows;
        shows = this.props.shows;
        let loggedShows
        let episodeslist;
        episodeslist = this.props.episodes;
        if( shows.length && episodeslist.length > 0) {
            
           loggedShows = shows.map((show) => {
                console.log(show)
                
                let content
                console.log(content)
                content = episodeslist.filter(episode => show.id === episode.show_id)
                console.log(content)
                return (<li><ShowItem show={show} episodes={content} key={show.id} /></li>
                )
            })
        }
        
       
        
        return (
            <div className="loggedin-main-hub">
                <div className="masthead-main">
                    <div className="masthead-details">
                        {/* <div className="thumbnail-details-title">{this.props.state.entities.shows::1.title}</div>
                        <div className="thumbnail-details-info">{this.props.state.entities.shows::1.year}</div>
                        <div className="thumbnail-details-description">{this.props.state.entities.shows.1.description}</div> */}
                        <div className="masthead-details-links">
                        </div>
                    </div>
                </div>
                <div className="postmasthead-hub-container">
                    {/* <div className="featured-hub-container">
                        <div className="featured-hub-1">
                            <div className="featured-hub-1-info">
                                <div className='featured-hub-1-extra'>
                                </div>
                            </div>
                        </div>
                        <div className="featured-hub-2-container">
                             <div className="featured-hub-2">
                                <div className="featured-hub-2-info">
                                </div>
                            </div>
                        </div>
                        <div className="featured-hub-3-container">
                            <div className="featured-hub-3">
                                <div className="featured-hub-3-info">
                                </div>
                            </div>
                        </div>
                        <div className="featured-hub-4-container">
                            <div className="featured-hub-4">
                                <div className="featured-hub-4-info">
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <h2 className="shows-collection-container-header">TV Collection</h2>
                    <div className="shows-collection-container"> 
                        <div className="shows-slider-container">
                            <ul className = 'logged-shows-ul'>
                                {loggedShows}
                            </ul>
                        </div>
                          
                    </div>
                    <h2 className="movies-collection-container-header">Movies Collection</h2>
                    <div className="shows-collection-container">
                        <div className="movies-slider-container">
        
                        </div>

                    </div>
                </div>
            </div>
                    
        )
    }
}
export default LoggedInMain;
