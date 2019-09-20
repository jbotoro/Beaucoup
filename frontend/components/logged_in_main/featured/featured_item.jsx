import React from 'react'
import {withRouter} from 'react-router-dom';

class featuredListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePlayFeaturedMovie(e) {
        e.preventDefault();
        this.props.history.push(`/videos/movies/${this.props.movie.id}`)
    }
    
    render () {
        return (
            <div className='featured-movie-item-container'>
                <div className='featured-movie-item'>
                    <button onClick={() => this.handlePlayMovie} className='featured-movie-item-play-button'>
                        <video src={this.props.movie.video_url}></video>
                        <img src={this.props.movie.image_url} />
                    </button>
                </div>
            </div>
            
        )
    }
}

export default withRouter(featuredListItem);