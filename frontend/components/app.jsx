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


const App = () => (
    <div>
        <Modal />
        <header className= 'app-header-container'>
            <AuthRoute exact path='/' component={NavBar} />
        </header>
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
        </Switch>
    </div>
);

export default App;