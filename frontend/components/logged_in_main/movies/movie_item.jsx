import React from 'react';
import {withRouter} from 'react-router-dom';


class movieItem extends React.Component {
    constructor(props){
        super(props)
        this.handlePlayMovie = this.handlePlayMovie.bind(this);
    }

    handlePlayMovie(e) {
        e.preventDefault();
        this.props.history.push(`/videos/movies/${this.props.movie.id}`)
    }

    render () {
        return (
            <div className='simple-movie-item-container'>
                <div className='simple-movie-item'>
                    <button onClick={() => this.handlePlayMovie} className='simple-movie-item-play-button'>
                        <video src={this.props.movie.video_url}></video>
                        <img src={this.props.movie.image_url} />
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(movieItem);