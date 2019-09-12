import React from 'react';
// import {Link} from 'react-router-dom';
// import SignedInLinks from './signed_in';
// import SignedOutLinks from './signed_out';

class NavBar extends React.Component  {
    constructor(props) {
        super(props);
    }
    
    render () {
       
        return (
            <nav className = 'Nav-main-container'>
                <span className='Nav-logo'> Beaucoup </span>
                <div className='Nav-main-buttons'>
                    <button 
                        className='Nav-signup' 
                        onClick={() => this.props.openModal('signup')}> 
                        START YOUR FREE TRIAL
                    </button>
                    <button 
                        className='Nav-login'
                        onClick={() => this.props.openModal('login')}>
                        LOG IN
                    </button>
                </div>
            </nav>
        )
    };
};

export default NavBar;
