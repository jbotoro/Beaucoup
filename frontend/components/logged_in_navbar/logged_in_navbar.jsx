import React from 'react';
import {Link} from 'react-router-dom'


const browseCategories = ['Action', 'Adventure', 'Cartoons','Classics','Comedy',
'Drama', 'Family', 'Horror', 'Kids','New School','Old School','Science Fiction','Thriller'
]

class loggedInNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentNav: 'Nav GlobalNav GlobalNav--masthead GlobalNav--transparent'
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        

        let y_index = window.pageYOffset;
        if (y_index === 0) {
            // console.log( 'we out here')
            this.setState({
                currentNav: 'Nav GlobalNav GlobalNav--masthead GlobalNav--transparent'
            })
        } else {
            // console.log('we in here')
            this.setState ({
                currentNav: 'Nav GlobalNav GlobalNav--masthead'
            })
    
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
          <header className={this.state.currentNav}>
            <div className="loggedin-navbar-header-main-container">
              <div className="loggedin-navbar">
                <div className="loggedin-navbar-item-logo">
                  <Link className="navbar-link-logo" to="/videos">
                    {" "}
                    Beaucoup{" "}
                  </Link>
                </div>
                <div
                  className="loggedin-navbar-browse"
                  aria-expanded="false"
                  onMouseOver={this.browseToggle}
                  onMouseLeave={this.leaveBrowse}
                >
                  <div className="loggedin-navbar-browse-item">
                    <button className="loggedin-navbar-browse-button">
                      <i class="material-icons"> menu </i>
                      {/* <img src={SearchIcon} className='loggedin-navbar-browse-button-icon'/> */}
                      <span className="loggedin-navbar-browse-label">
                        {" "}
                        Browse
                      </span>
                    </button>
                  </div>
                  <div className="loggedin-navbar-browse-menu">
                    <div className="loggedin-navbar-browse-dropdown-container">
                      <div className="loggedin-navbar-browse-menu-container">
                        <div className="loggedin-navbar-browse-menu-items">
                          <ul className="loggedin-navbar-browse-menu-hubs">
                            <li className="loggedin-navbar-browse-menu-hubs-item">
                              <div className="browse-menu-hub-links">
                                {" "}
                                Movies{" "}
                              </div>
                            </li>
                            <li className="loggedin-navbar-browse-menu-hubs-item">
                              <div className="browse-menu-hub-links">
                                {" "}
                                Shows{" "}
                             </div>
                            </li>
                          </ul>
                          <ul className="loggedin-navbar-browse-menu-categories">
                            {this.categories()}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="loggedin-navbar-item-myStuff">
                  <div className='loggedin-navbar-myStuff-icon-wrap'>
                    <i class="material-icons md-1">done</i>
                  </div>
                  <Link className="navbar-link" to="/my-stuff">
                    My Stuff
                  </Link>
                </div>
                <div className="loggedin-navbar-item-spacer"></div>
                <div
                  className="loggedin-navbar-item-profile-container"
                  aria-expanded="false"
                >
                  <div className="loggedin-navbar-profile-item">
                    <button className="loggedin-search-btn">
                      <Link className="navbar-link" to="/search">
                        <i class="material-icons"> search </i>
                        {/* <img src={SearchIcon} className='loggedin-navbar-search-icon' /> */}
                        <span className="loggedin-navbar-search-label">
                          {" "}
                          Search
                        </span>
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
                <div
                  className="loggedin-navbar-item-profile-container"
                  aria-expanded="false"
                  onMouseOver={this.profileToggle}
                  onMouseLeave={this.leaveProfile}
                >
                  <div className="loggedin-navbar-profile-item">
                    <button className="loggedin-navbar-profile-dropdown-button">
                      <div className="loggedin-profile-icon"> D </div>
                      <span className="loggedin-profile-name-label">
                        {" "}
                        Demo User
                      </span>
                    </button>
                  </div>
                  <div className="loggedin-navbar-item-profile-dropdown">
                    <div className="loggedin-navbar-profile-dropdown-links">
                      <button
                        className="loggedin-navbar-profile-logout-button"
                        onClick={this.handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default loggedInNavBar;