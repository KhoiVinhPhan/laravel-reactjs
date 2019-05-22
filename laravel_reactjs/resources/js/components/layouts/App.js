import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Button from './Button';

class App extends Component {
    render() { 
        return (
	        <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="/">Start Bootstrap</a>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link js-scroll-trigger" to={'/contact'}>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Button />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{ marginTop: '100px' }}>
                	{this.props.children}
                </div>
            </div>
        )
    }
}

export default App
