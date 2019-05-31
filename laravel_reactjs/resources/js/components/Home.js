import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import App from './layouts/App';

class Home extends Component {
	constructor(props){
		super(props);
		this.hanldeButton = this.hanldeButton.bind(this);
	}

	hanldeButton(){
		
	}

	render() {        
		return (
			<App>
				<div>
					<h2>Home</h2>
					<button onClick={this.hanldeButton}>Button</button>
				</div>
			</App>
		)
	}
}

export default Home