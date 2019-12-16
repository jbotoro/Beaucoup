import React from 'react';
import FeaturedList from './featured/logged_in_featured'
import FeaturedSecondRow from './featured/featuredrow2'
import Masthead from './featured/logged_in_masthead'
import MovieList from './movies/movies_container';
import ShowList from './shows/shows_container';


class LoggedInMain extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            episodes: [],
            movies: [],
            shows: []
        }
   }

    componentDidMount() {
        this.props.findShows();
        this.props.findMovies();
        this.props.findEpisodes();

    }

    




    render () {
        // let shows;

        // shows = this.props.shows.map(() =>)
        // console.log(this.props)
        
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
                    <div className="featured-hub-container">
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
                    </div>
                    <h2 className="shows-collection-container-header">TV Collection</h2>
                    <div className="shows-collection-container"> 
                        <div className="shows-slider-container"></div>
                    </div>
                    <h2 className="movies-collection-container-header">Movies Collection</h2>
                    <div className="shows-collection-container">
                        <div className="movies-slider-container"></div>
                    </div>
                </div>
            </div>
                    
        )
    }
}
export default LoggedInMain;
