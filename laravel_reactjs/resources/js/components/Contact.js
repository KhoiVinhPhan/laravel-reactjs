import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import App from './layouts/App';

class Contact extends Component {
	render() {
		let login = localStorage.getItem('jwt');
        if (!login) {
            return (
                <div>
                    <Redirect to='login'/>
                </div>
            )
        }
		return (
			<App>
				<div>
					<h2>Contact</h2>
				</div>
			</App>
		)
	}
}

export default Contact