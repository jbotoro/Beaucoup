import React from 'react';
import FeaturedListItem from './featured_item_container';

class featuredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount () {
        this.props.findMovies()
        .then( () => {
            this.setState ({
                movies: this.props.movies.map(movie => {return movie})
            })
        })
    }

    render () {

        const mapAllMovies = this.state.movies.map(movie => {
            return (
                <FeaturedListItem movie={movie} key={movie.id} />
            )
        });
        const featuredMovies = mapAllMovies.splice(Math.floor(Math.random() * mapAllMovies.length), 3);

        return (
            <div className='loggedin-main-featured-wrapper'>
                <div className='loggedin-main-featured-container'>
                    <div className='loggedin-main-featured-item-container'>
                        {featuredMovies}
                    </div>
                </div>
            </div>
        )
    }
}

export default featuredList;