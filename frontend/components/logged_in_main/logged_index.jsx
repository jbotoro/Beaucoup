import React from 'react';
import FeaturedList from './featured/featured_container';
import MovieList from './movies/movies_container';
import ShowList from './shows/shows_container';


class loggedInMain extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.findEpisodes();
        this.props.findShows();
        this.props.findMovies();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.currentUser.id) {
            this.props.history.push("/splash");
        }
    }


    render () {
        return (
            <div className="loggedin-main-hub">
                <div className="masthead-main">
                    <div className="masthead-details">
                        {/* <div className="thumbnail-details-title">{this.state.headline.title}</div>
                        <div className="thumbnail-details-info">{this.state.headline.info}</div>
                        <div className="thumbnail-details-description">{this.state.headline.description}</div> */}
                        <div className="masthead-details-links">
                        </div>
                    </div>
                </div>
                <div className="postmasthead-hub-container">
                    <div className="featured-hub-container">
                        <div className="featured-hub-1">
                            <div className="featured-hub-1-info">
                                <div className='featured-hub-1-extra'>
                                    {/* <div className="slider-1-title">{this.state.example1.title}</div>
                                    <div className="slider-1-info-li">{this.state.example1.year}</div>
                                    <div className="slider-1-description">{this.state.example1.description}</div> */}
                                </div>

                            </div>
                        </div>
                        <div className="featured-hub-2-container">
                             <div className="featured-hub-2">
                                <div className="featured-hub-2-info">
                                    {/* <div className="slider-2-title">{this.state.example2.title}</div>
                                    <div className="slider-2-info-li">{this.state.example2.year}</div>
                                    <div className="slider-2-description">{this.state.example2.description}</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="featured-hub-3-container">
                            <div className="featured-hub-3">
                                <div className="featured-hub-3-info">
                                    {/* <div className="slider-3-title">{this.state.example3.title}</div>
                                    <div className="slider-3-info-li">{this.state.example3.year}</div>
                                    <div className="slider-3-description">{this.state.example1.description}</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="featured-hub-4-container">
                            <div className="featured-hub-4">
                                <div className="featured-hub-4-info">
                                    {/* <div className="slider-4-title">{this.state.example4.title}</div>
                                    <div className="slider-4-info-li">{this.state.example4.year}</div>
                                    <div className="slider-4-description">{this.state.example4.description}</div> */}
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

export default loggedInMain;