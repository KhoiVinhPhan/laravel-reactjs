import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import App from './layouts/App';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props){
		super(props);
		this.hanldeButton = this.hanldeButton.bind(this);
	}

	hanldeButton(){
		console.log(this.props);
		this.props.dispatch({type: "TOGGLE"});
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

export default connect(function(state){
	return {mang: state.mang}
})(Home);