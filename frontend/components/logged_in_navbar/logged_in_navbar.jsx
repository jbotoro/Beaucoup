import React from 'react';
import {Link} from 'react-router-dom'

const browseCategories = ['Action', 'Adventure', 'Cartoons','Classics','Comedy',
'Drama', 'Family', 'Horror', 'Kids','Late Night','New Anime','Old Anime','Romance','Science Fiction','Teen','Thriller'
]

class loggedInNavBar extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll () {
        const y_index =  window.pageYOffset;
        const solid_nav_y_index = 75;

        if ( y_index > solid_nav_y_index) {
            let x = document.querySelector('.Nav GlobalNav GlobalNav--masthead GlobalNav--transparent').classList.remove('--transparent')
            console.log(x);
        }

    }
   
    
    
    categories () {
        return (
            <ul className='browse-menu-genres'>
                {browseCategories.map((category, idx) =>
                    <li className='browse-menu-genres-item' key={idx}> {category}</li>
                    )}
            </ul>
        )
    }

    handleLogout() {
        this.props.logout().then(this.props.history.push('/'))
    }


    browseToggle () {
        document.querySelector('.loggedin-navbar-browse-menu').classList.add('loggedin-navbar-browse-menu--hover')
    }
    leaveBrowse () {
        document.querySelector('.loggedin-navbar-browse-menu--hover').classList.remove('loggedin-navbar-browse-menu--hover')
    }
    profileToggle () {
        document.querySelector('.loggedin-navbar-item-profile-dropdown').classList.add('loggedin-navbar-item-profile-dropdown--open')
    }
    leaveProfile () {
        document.querySelector('.loggedin-navbar-item-profile-dropdown--open').classList.remove('loggedin-navbar-item-profile-dropdown--open')
    }
    
    render () {
    
        return (
            <header className='Nav GlobalNav GlobalNav--masthead GlobalNav--transparent' onScroll={this.handleScroll}>
                <div className='loggedin-navbar-header-main-container'>
                    <div className='loggedin-navbar'>
                        <div className='loggedin-navbar-item-logo'>
                            <Link className='navbar-link'to='/videos'> Beaucoup </Link>
                        </div>
                        <div className='loggedin-navbar-browse' aria-expanded='false' onMouseOver={this.browseToggle} onMouseLeave={this.leaveBrowse}>
                            <div className='loggedin-navbar-browse-item'>
                                <button className='loggedin-navbar-browse-button'>
                                    <img src="" className='loggedin-navbar-browse-button-icon'/>
                                    <span className='loggedin-navbar-browse-label'> Browse</span>
                                </button>
                            </div>
                            <div className='loggedin-navbar-browse-menu' >
                                <div className='loggedin-navbar-browse-dropdown-container'>
                                    <div className='loggedin-navbar-browse-menu-container'>
                                        <div className='loggedin-navbar-browse-menu-items'>
                                            <ul className='loggedin-navbar-browse-menu-hubs'>
                                                <li className='loggedin-navbar-browse-menu-hubs-item'>
                                                    <Link className='browse-menu-hub-links' to='/videos/movies'> Movies </Link>
                                                </li>
                                                <li className='loggedin-navbar-browse-menu-hubs-item'>
                                                    <Link className='browse-menu-hub-links' to='/videos/shows'> Shows </Link>
                                                </li>
                                            </ul>
                                            {this.categories()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='loggedin-navbar-item-myStuff'>
                            <Link className='navbar-link' to='/my-stuff'>myStuff</Link>
                        </div>
                        <div className='loggedin-navbar-item-spacer'></div>
                        <div className='loggedin-navbar-item-profile-container' aria-expanded='false' onMouseOver={this.profileToggle} onMouseLeave={this.leaveProfile}>
                            <div className='loggedin-navbar-profile-item'>
                                <button >
                                    <Link className='navbar-link' to='/search'>
                                        <img src='' className='loggedin-navbar-search-icon' />
                                        <span className='loggedin-navbar-search-label' > Search</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* <div className='logged-in-navbar-item-search' style={{ display: 'flex' }} >
                            <Link className='navbar-link' to='/search'> 
                                <img src='' className='loggedin-navbar-search-icon'/>
                                <span className='loggedin-navbar-search-label' > Search</span>
                            </Link>
                        </div> */}
                        <div className='loggedin-navbar-item-profile-container' aria-expanded='false' onMouseOver={this.profileToggle} onMouseLeave={this.leaveProfile}> 
                            <div className='loggedin-navbar-profile-item'>
                                <button className='loggedin-navbar-profile-dropdown-button'>
                                    <div className='loggedin-profile-icon'> D </div>
                                    <span className='loggedin-profile-name-label'> Demo User</span>
                                </button>
                            </div>
                            <div className='loggedin-navbar-item-profile-dropdown'>
                                <div className='loggedin-navbar-profile-dropdown-links'>
                                    <button className='loggedin-navbar-profile-logout-button' onClick={this.handleLogout} >
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default loggedInNavBar;