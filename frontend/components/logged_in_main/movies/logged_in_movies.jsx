import React from 'react';
import MovieItemContainer from './movie_item_container';

class loggedInMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.props.findMovies()
            .then(() => {
                this.setState({
                    movies: this.props.movies.map(movie => { movie })
                })
            })
    }

    render () {

        const mapAllMovies = this.state.movies.map(movie => {
            return (
                <MovieItemContainer movie={movie} key={movie.id}/>
            )
        });
        const displayedMovies = mapAllMovies.splice(Math.floor(Math.random() * mapAllMovies.length), 4);

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