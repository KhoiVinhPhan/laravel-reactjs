import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Button extends Component {
	constructor(props) {
        super(props)

        this.handleLogoutWeb = this.handleLogoutWeb.bind(this)
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
                // window.location.href = '/';
                // console.log(this.props);
                this.props.history.push('/login');
            }
        })
    }

	render() {
		let login = localStorage.getItem('jwt');
        if (login) {
            return (
                <button className="btn btn-primary" onClick={this.handleLogoutWeb}>Logout</button>
            )
        }
        
		return (
			<Link className="nav-link js-scroll-trigger" to={'/login'}>Login</Link>
		)
	}
}

export default Button