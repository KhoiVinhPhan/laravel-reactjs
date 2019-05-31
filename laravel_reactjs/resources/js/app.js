/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');
require('./example.js');


// resources\assets\js\app.js

import React from 'react'
import { render } from 'react-dom'
import {
    Router,
    Route,
    Switch
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Users from './components/users/Index.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'


const history = createBrowserHistory()
render (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/users' component={Users} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Switch>
    </Router>, 
    document.getElementById('app')
)