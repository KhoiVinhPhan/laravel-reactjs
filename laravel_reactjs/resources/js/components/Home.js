import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import App from './layouts/App';

class Home extends Component {
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
					<h2>Home</h2>
				</div>
			</App>
		)
	}
}

export default Home