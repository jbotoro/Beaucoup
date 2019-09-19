import React from 'react';
import MovieItemContainer from './movie_item_container';

class loggedInMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render () {

        const mapAllMovies = this.state.movies.map(movie => {
            return (
                <MovieItemContainer movie={movie} key={movie.id}/>
            )
        });
        const displayedMovies = mapAllMovies.slice(0,3)

        return (
            <div className='logged-movies-main-wrapper'>
                <div className="logged-movies-main-container">
                    <ul className='logged-movies-main-items-container'>
                        {displayedMovies}
                    </ul>
                </div>
            </div>
        )
    }
}

export default loggedInMovies;