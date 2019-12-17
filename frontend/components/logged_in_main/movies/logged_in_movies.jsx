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

            // debugger
    }

    render () {

        const mapAllMovies = this.state.movies.map(movie => {
            return (
                <MovieItemContainer movie={movie} key={movie.id}/>
            )
            // debugger
        });
        const displayedMovies = mapAllMovies;

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