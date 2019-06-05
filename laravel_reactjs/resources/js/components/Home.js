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
		this.props.dispatch({type: "ADD_ITEM", item: "D"});
		console.log(this.props);
	}

	render() {        
		return (
			<App>
				<div>
					<h2>Home</h2>
					<p></p>
					<button onClick={this.hanldeButton}>Button</button>
				</div>
			</App>
		)
	}
}

export default connect(function(state){
	return {mang: state.mang}
})(Home);