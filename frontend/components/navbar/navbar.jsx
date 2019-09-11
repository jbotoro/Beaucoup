import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './signed_in';
import SignedOutLinks from './signed_out';

const NavBar = () => {
    let links;
    if (window.currentUser) {
        links = <SignedInLinks />
    } else {
        links = <SignedOutLinks />
    }
    return (
        <nav className="nav-wrapper">
            <div className='container'>
                <ul>
                    <li>
                        <Link to='/' className='beaucoup logo'> Beaucoup </Link>
                    </li>
                    {links}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
