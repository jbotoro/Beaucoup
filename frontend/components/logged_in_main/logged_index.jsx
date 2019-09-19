import React from 'react';
import FeaturedList from './featured/featured_container';
import MovieList from './movies/movies_container';
import ShowList from './shows/shows_container';


class loggedInMain extends React.Component {
    constructor(props){
        super(props)
    }


    render () {
        return (
            <div className='loggedin-main-wrapper'>
                <div className='loggedin-main-hub'>
                    <div className='loggedin-main-hub-collections-container'>
                        <div className='loggedin-collection'>
                            <div className='loggedin-masthead-vertical-slider-collection'>
                                <div className='WindowedList'>
                                    <div className='WindowedListItem'>
                                        <div className='loggedin-masthead-above-vertical-slider-collection'>
                                            <div>
                                                <div className='loggedin-masthead-tile'>
                                                    <div className='loggedin-masthead-tile-background'></div>
                      
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='featuredList-main-div-wrapper'>
                                    <FeaturedList />
                                </div>
                             </div>
                        </div>
                        <div className='hub-collection-movies'>
                            <div className='simple-hub-collection-container'>
                                <div className='simple-hub-collection-header'>]

                                </div>
                                <div className='simple-hub-collection-list'>
                                    <div className='simple-hub-collection-list-wrapper'>
                                        <div className='WindowedCollectionList'>
                                            <MovieList />
                                            {/* insert movies container here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hub-collection-shows'>
                            <div className='simple-hub-collection-container'>
                                <div className='simple-hub-collection-header'>]

                                </div>
                                <div className='simple-hub-collection-list'>
                                    <div className='simple-hub-collection-list-wrapper'>
                                        <div className='WindowedCollectionList'>
                                            <ShowList />
                                            {/* insert shows container here */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default loggedInMain;