import React from 'react';
import {
    Route, Redirect, Switch,
    Link, HashRouter
} from 'react-router-dom';
// import LogInFormContainer from './login_form/login_form_container';
// import SignUpFormContainer from './login_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import Modal from './modal/modal';
import NavBar from './navbar/navbar_container';
import Splash from './splash_page/splash_container';
import loggedInNavBar from './logged_in_navbar/logged_in_navbar_container';
import {withRouter} from 'react-router-dom'
import loggedInMain from './logged_in_main/logged_index_container';
import {removeErrors} from '../actions/session_actions'
import Genres from './genres_display/genres_ container';
import genreNavBar from './logged_in_navbar/genre_navbar_container';
import myStuff from './my_stuff/my_stuff_container';
import SearchBar from './search/search_container';



const App = () => (
    <div className='main-app'>
        <Modal removeErrors={removeErrors} />
        <header className= 'app-header-container'>
            <Switch>
                <AuthRoute exact path='/' component={NavBar} />
                {/* <ProtectedRoute path='/videos/videoplayer/:videoId' component={VideoPlayer} /> */}
                <ProtectedRoute exact path='/videos' component={loggedInNavBar} />
                <ProtectedRoute path='/videos/genres/:genreId' component={genreNavBar} />
                <ProtectedRoute path='/videos/my-stuff' component={genreNavBar} />
                <ProtectedRoute path='/videos/search' component={genreNavBar} />
            </Switch>
            <ProtectedRoute exact path ='/videos' component={loggedInMain} />
            <ProtectedRoute  path ='/videos/genres/:genreId' component ={Genres} />
            <ProtectedRoute exact path = '/videos/my-stuff' component ={myStuff} />
            <ProtectedRoute exact path = '/videos/search' component ={SearchBar} />
           
        </header>
        <Route exact path='/' component={Splash} />
    </div>
);

export default App;