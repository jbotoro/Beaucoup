import React from 'react';
import FeaturedList from './featured/featured_container';
import MovieList from './movies/movies_container';
import ShowList from './shows/shows_container';


class loggedInMain extends React.Component {
    constructor(props){
        super(props)
    }


    render () {
        return (<div>
            <div className="loggedin-main-hub">
                <div className="masthead-main">
                    <div className="masthead-details">
                        {/* <div className="thumbnail-details-title">{this.state.headline.title}</div>
                        <div className="thumbnail-details-info">{this.state.headline.info}</div>
                        <div className="thumbnail-details-description">{this.state.headline.description}</div> */}
                        <div className="masthead-details-links">
                            {/* <button onClick={(e) => this.handleSubmit(e, 'video', 2)} className="thumbnail-details-info-links">
                                <i className="fas fa-play-circle fa-3x"></i>
                                <p className="thumbnail-play-text">Start watching {this.state.headline.title}</p>
                            </button>
                            <button onClick={(e) => this.handleSubmit(e, 'detail', 2)} className="thumbnail-details-button">
                                <i className="fas fa-arrow-circle-right fa-2x" ></i>
                            </button> */}
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
                                 
                              
                                {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                            </div>
                        </div>
                        <div className="featured-hub-2-container">
                             <div className="featured-hub-2">
                                <div className="featured-hub-2-info">
                                    {/* <div className="slider-2-title">{this.state.example2.title}</div>
                                    <div className="slider-2-info-li">{this.state.example2.year}</div>
                                    <div className="slider-2-description">{this.state.example2.description}</div> */}
                                </div>
                                {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                            </div>
                        </div>
                        <div className="featured-hub-3-container">
                            <div className="featured-hub-3">
                                <div className="featured-hub-3-info">
                                    {/* <div className="slider-3-title">{this.state.example3.title}</div>
                                    <div className="slider-3-info-li">{this.state.example3.year}</div>
                                    <div className="slider-3-description">{this.state.example1.description}</div> */}
                                </div>
                                {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                            </div>
                        </div>
                        <div className="featured-hub-4-container">
                            <div className="featured-hub-4">
                                <div className="featured-hub-4-info">
                                    {/* <div className="slider-4-title">{this.state.example4.title}</div>
                                    <div className="slider-4-info-li">{this.state.example4.year}</div>
                                    <div className="slider-4-description">{this.state.example4.description}</div> */}
                                </div>
                                {/* <div className="slider-info-buttons">
                                            <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                                <i className="fas fa-arrow-circle-right fa-2x"></i>
                                            </button>
                                            <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                                <i className="fas fa-plus-circle fa-2x"></i>
                                            </button>
                                            <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                                <i className="fas fa-minus-circle fa-2x"></i>
                                            </button>
                                        </div> */}
                            </div>
                        </div>
                    </div>
                    <h2 className="shows-collection-container-header">TV Collection</h2>
                    <div className="shows-collection-container">
                        <div className="shows-collection-items">
                            <div className="shows-collection-item-1">
                                <div className="shows-collection-item-1-info">
                                    {/* <div className="showcase-title">{this.state.example5.title}</div>
                                    <div className="showcase-details">{this.state.example5.year}</div>
                                    <button onClick={(e) => this.handleSubmitVideo(e, 'detail', 8)} className="showcase-btn-extra-1">
                                        <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                    </button> */}
                                </div>

                            </div>
                        </div>
                        <div className="shows-collection-items">
                            <div className="shows-collection-item-2">
                                <div className="shows-collection-item-2-info">
                                    {/* <div className="showcase-title">{this.state.example6.title}</div>
                                    <div className="showcase-details">{this.state.example6.year}</div>
                                    <button onClick={(e) => this.handleSubmitVideo(e, 'detail', 5)} className="showcase-btn-extra-2">
                                        <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shows-slider-container"></div>
                    <h2 className="movies-collection-container-header">Movies Collection</h2>
                    <div className="shows-collection-container">
                        <div className="shows-collection-items">
                            <div className="shows-collection-item-3">
                                <div className="shows-collection-item-3-info">
                                    {/* <div className="showcase-title">{this.state.headline.title}</div>
                                    <div className="showcase-details">{this.state.headline.year}</div>
                                    <button onClick={(e) => this.handleSubmit(e, 'detail', 2)} className="showcase-btn-extra-3">
                                        <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        <div className="shows-collection-items">
                            <div className="shows-collection-item-4">
                                <div className="shows-collection-item-4-info">
                                    {/* <div className="showcase-title">{this.state.example3.title}</div>
                                    <div className="showcase-details">{this.state.example3.year}</div>
                                    <button onClick={(e) => this.handleSubmit(e, 'detail', 4)} className="showcase-btn-extra-4">
                                        <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                         <div className="movies-slider-container"></div>
                </div>

            </div>
        </div>
            // <div className='loggedin-main-wrapper'>
            //     <div className='loggedin-main-hub'>
            //         <div className='loggedin-main-hub-collections-container'>
            //             <div className='loggedin-collection'>
            //                 <div className='loggedin-masthead-vertical-slider-collection'>
            //                     <div className='WindowedList'>
            //                         <div className='WindowedListItem'>
            //                             <div className='loggedin-masthead-above-vertical-slider-collection'>
            //                                 <div>
            //                                     <div className='loggedin-masthead-tile'>
            //                                         <div className='loggedin-masthead-tile-background'></div>
                      
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className='featuredList-main-div-wrapper'>
            //                         <FeaturedList />
            //                     </div>
            //                  </div>
            //             </div>
            //             <div className='hub-collection-movies'>
            //                 <div className='simple-hub-collection-container'>
            //                     <div className='simple-hub-collection-header'>

            //                     </div>
            //                     <div className='simple-hub-collection-list'>
            //                         <div className='simple-hub-collection-list-wrapper'>
            //                             <div className='WindowedCollectionList'>
            //                                 <MovieList />
            //                                 {/* insert movies container here */}
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className='hub-collection-shows'>
            //                 <div className='simple-hub-collection-container'>
            //                     <div className='simple-hub-collection-header'>

            //                     </div>
            //                     <div className='simple-hub-collection-list'>
            //                         <div className='simple-hub-collection-list-wrapper'>
            //                             <div className='WindowedCollectionList'>
            //                                 <ShowList />
            //                                 {/* insert shows container here */}
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default loggedInMain;