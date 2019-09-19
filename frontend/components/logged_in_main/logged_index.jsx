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
                                {/* <Featured /> */}
                                {/*  this should be a featured component/featured component container */}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default loggedInMain;