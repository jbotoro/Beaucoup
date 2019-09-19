import React from 'react';

class loggedInMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render () {

        const selected_movies = this.state.movies.map(movie => {
            return (
                // insert movie item container
            )
        });


        return (
            <div className='logged-movies-main-wrapper'>
                <div className="logged-movies-main-container">
                    <ul className='logged-movies-main-items-container'>
                        {/* insert 5 movie items here */}
                    </ul>
                </div>
            </div>
        )
    }
}