import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { 
            entities:{users: {[window.currentUser.id] : window.currentUser }},
            session: { id: window.currentUser.id} 
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.login = login;
    window.signup = signup;
    window.dispatch = store.dispatch;
    window.logout = logout;
    window.getState = store.getState

    // Setup Rails authenticity token header since rails-ujs doesn't seem to be
    // doing it
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    })
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} /> , root);
});