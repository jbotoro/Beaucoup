import React from 'react'

class featuredListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
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
                                            <img src="" className='VerticalCoverStoryTile__rollover-image' />
                                        </Link>
                                    </div>
                                    <div className='VerticalCoverStoryTile__background-container'>
                                        <div className='VerticalCoverStoryTile__wrapper'>
                                            <div className='VerticalCoverStoryTile__base'></div>
                                            {/* insert tile background thumbnail here */}
                                            <img src="" className='VerticalCoverStoryTile__art' />
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
        )
    }
}