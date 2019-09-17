import React from 'react';




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
                                                    <div className='loggedin-masthead-tile-spacer'></div>
                                                    <div className='masthead-tile-thumbnail'>
                                                        <div className='masthead-tile-thumbnail-anim-group'>
                                                            {/* add masthead tile img here */}
                                                            <img src="" alt=""/>
                                                        </div>
                                                        <div className='masthead-tile-thumbnail-scrim'>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  this should be a featured component/featured component container */}
                                <div className='slider MastheadAboveVerticalSliderCollection__vertical-slider'>
                                    <button className='slider__button slider__button--previous slider__button--hidden'>

                                    </button>
                                    <div className='slider__list-wrapper'>
                                        <div className='WindowedList'>
                                            {/* every WindowedListItem should be a featured tile Item */}
                                            <div className='WindowedListItem'>
                                                <div>
                                                    <div className='HoverSetup VerticalCoverStoryTile'>
                                                        <button className='HoverSetup_button' aria-label='false'>

                                                        </button>
                                                        <div aria-hidden='true'>
                                                            <div className='VerticalCoverStoryTile__thumbnail'>
                                                                <div className='VerticalCoverStoryTile__spacer'></div>
                                                                <div className='VerticalCoverStoryTile__rollover'>
                                                                    <Link className='VerticalCoverStoryTile__playMasthead'>
                                                                        <span className='sr-only'> Start Watching</span>
                                                                        {/* insert tile play thumbnail here */}
                                                                        <img src="" className='VerticalCoverStoryTile__rollover-image'/>
                                                                    </Link>
                                                                </div>
                                                                <div className='VerticalCoverStoryTile__background-container'>
                                                                    <div className='VerticalCoverStoryTile__wrapper'>
                                                                        <div className='VerticalCoverStoryTile__base'></div>
                                                                        {/* insert tile background thumbnail here */}
                                                                        <img src="" className='VerticalCoverStoryTile__art'/>
                                                                        <div className='VerticalCoverStoryTile__scrim'></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='VerticalCoverStoryTile__content'>
                                                                <div className='VerticalCoverStoryTile__details-wrapper'>
                                                                    <div className='VerticalCoverStoryTile__details'>
                                                                        <Link className='VerticalCoverStoryTile__title VerticalCoverStoryTile__title--clickable '></Link>
                                                                        <ul className='VerticalCoverStoryTile__metadata'>
                                                                            <li className='VerticalCoverStoryTile__meta'> Season and episode info here</li>
                                                                        </ul>
                                                                        <div className='VerticalCoverStoryTile__hoverData'>
                                                                            <div className='VerticalCoverStoryTile__description'>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='VerticalCoverStoryTile__details-item'>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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