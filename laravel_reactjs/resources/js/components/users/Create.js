import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import App from '../layouts/App';
import axios from 'axios';


class Create extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
	}

	handleChangeName(e){
		this.setState({
			name: e.target.value
		});
	}

	handleChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	handleChangePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmitRegister(e) {
		e.preventDefault();
		let url = '/api/users/create';
		axios.post(url, this.state).then( (response) => {
			if (response.status == 200) {
                this.props.history.push('/users');
            }
		} )
	}

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
            	<div className="panel panel-default">
                    <div className="panel-heading ">Create</div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmitRegister}>
                            <label>User name</label>
                            <input type={'text'} className="form-control" onChange={this.handleChangeName}/>
                            <label>Email</label>
                            <input type={'text'} className="form-control" onChange={this.handleChangeEmail}/>
                            <label>Password</label>
                            <input type={'password'} className="form-control" onChange={this.handleChangePassword}/>
                            <div className="form-group">
                                <button className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
			</App>
		)
	}
}

export default Create