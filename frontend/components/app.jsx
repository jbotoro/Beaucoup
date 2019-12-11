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


const App = () => (
    <div>
        <Modal removeErrors={removeErrors} />
        <header className= 'app-header-container'>
            <Switch>
                <AuthRoute exact path='/' component={NavBar} />
                {/* <ProtectedRoute path='/videos/videoplayer/:videoId' component={VideoPlayer} /> */}
                <ProtectedRoute path='/videos' component={loggedInNavBar} />
            </Switch>
            <Switch>
                <ProtectedRoute path ='/videos' component={loggedInMain} />
            </Switch>
        </header>
        <Route exact path='/' component={Splash} />
    </div>
);

export default App;