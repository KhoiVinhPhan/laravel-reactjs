import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Button extends Component {
	constructor(props) {
        super(props);
        this.handleLogoutWeb = this.handleLogoutWeb.bind(this);
    }

    handleLogoutWeb(e) {
        e.preventDefault();
        let uri = '/api/logout';
        let token = {
            'token' : localStorage.getItem('jwt')
        }
        axios.post(uri, token).then((response) => {
            if (response.status == 200) {
                localStorage.removeItem('jwt');
                localStorage.removeItem('email');
                window.location.href = '/';
                // console.log(this.state);
                // this.props.history.push('/contact');
            }
        })
    }

	render() {
		let login = localStorage.getItem('jwt');
        if (login) {
            return (
                <Fragment>
                    <li className="nav-item">     
                        <span className="nav-link js-scroll-trigger">Hello: {this.props.email}</span>
                    </li>
                    <li className="nav-item">
                        <form onSubmit={this.handleLogoutWeb}>
                            <button className="btn btn-primary">Logout</button>
                        </form>
                    </li>
                </Fragment>
            )
        }
        
		return (
            <Fragment>
                <li className="nav-item">     
                    <Link className="nav-link js-scroll-trigger" to={'/login'}>Login</Link>
                </li>
                <li className="nav-item">     
                    <Link className="nav-link js-scroll-trigger" to={'/register'}>Register</Link>
                </li>
            </Fragment>
		)
	}
}

export default Button