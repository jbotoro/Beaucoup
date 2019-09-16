import React from 'react';
import {Link} from 'react-router-dom'

const browseCategories = ['Action', 'Adventure', 'Cartoons','Classics','Comedy',
'Drama', 'Family', 'Horror', 'Kids','Late Night','New Anime','Old Anime','Romance','Science Fiction','Teen','Thriller'
]

class loggedInNavBar extends React.Component {
    constructor(props){
        super(props);
    }

    categories () {
        return (
            <ul>
                {browseCategories.map((category, idx) =>
                    <li key={idx}> {category}</li>
                    )}
            </ul>
        )
    }
    
    render () {
        return (
            <header className='loggedin-navbar-header'>
                <div className='loggedin-navbar-header-main-container'>
                    <div className='loggedin-navbar'>
                        <div className='loggedin-navbar-item-logo'>
                            <Link to='/videos'>Beaucoup</Link>
                        </div>
                        <div className='loggedin-navbar-browse' aria-expanded='false'>
                            <div className='loggedin-navbar-browse-item'>
                                <button className='loggedin-navbar-browse-button'>
                                    <img src="" className='loggedin-navbar-browse-button-icon'/>
                                    <span className='loggedin-navbar-browse-label'> Browse</span>
                                </button>
                            </div>
                            <div className='loggedin-navbar-browse-menu'>
                                <div className='loggedin-navbar-browse-dropdown-container'>
                                    <div className='loggedin-navbar-browse-menu-container'>
                                        <div className='loggedin-navbar-browse-menu-items'>
                                            <ul className='loggedin-navbar-browse-menu-hubs'>
                                                <li className='loggedin-navbar-browse-menu-hubs-item'>
                                                    <Link to='/videos/movies'> Movies </Link>
                                                </li>
                                                <li className='loggedin-navbar-browse-menu-hubs-item'>
                                                    <Link to='/videos/shows'> Shows </Link>
                                                </li>
                                            </ul>
                                            {this.categories()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='loggedin-navbar-item-myStuff'>
                            <Link to='/my-stuff'>myStuff</Link>
                        </div>
                        <div className='loggedin-navbar-item-spacer'></div>
                        <div className='logged-in-navbar-item-search'>
                            <Link to='/search'> 
                                <img src='' className='loggedin-navbar-search-icon'/>
                                <span className='loggedin-navbar-search-label'> Search</span>
                            </Link>
                        </div>
                        <div className='loggedin-navbar-item-profile-container' aria-expanded='false'> 
                            <div className='loggedin-navbar-profile-item'>
                                <button className='loggedin-navbar-profile-dropdown-button'>
                                    <div className='loggedin-profile-icon'></div>
                                    <span className='loggedin-profile-name-label'> Demo User</span>
                                </button>
                            </div>
                            <div className='loggedin-navbar-item-profile-dropdown'>
                                <div className='loggedin-navbar-profile-dropdown-links'>
                                    <button className='loggedin-navbar-profile-logout-button' onClick={() => this.props.logout}>
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