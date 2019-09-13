import React from 'react';
import { withRouter } from 'react-router-dom';


class Splash extends React.Component {
   

    render () {
        return (
            <div className='splash-main-container'>
                <div className='main-masthead-container'>
                    <div className='masthead-header-container'>
                        <h1 className='main-masthead-header'> All Your TV In One Place</h1>
                    </div>
                    <div className='masthead-content-1'>
                        Watch thousands of shows and movies, with plans starting <br/> at $5.99/month.
                    </div>
                    <div className='masthead-content-2'>
                        HBO®, SHOWTIME®, CINEMAX®, and STARZ® available as add-ons.
                    </div>
                    <div className='masthead-free-trail-container'>
                        <button 
                            className='masthead-free-trail-button'
                            onClick={this.props.openModal('signup')}
                            >START YOUR FREE TRIAL
                        </button>
                    </div>
                    <div className='masthead-trail-details'>
                        Free trial available for new and eligible returning subscribers only.
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Splash);