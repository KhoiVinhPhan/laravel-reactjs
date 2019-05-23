import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import App from './layouts/App';

class Home extends Component {
	render() {        
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