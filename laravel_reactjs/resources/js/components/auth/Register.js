import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import App from '../layouts/App';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmitRegister(e) {
        e.preventDefault();
        let uri = '/api/signup';
        axios.post(uri, this.state).then((response) => {
            if (response.status == 200) {
                this.props.history.push('/login');
            }
        })
    }
    render() {
        return (
            <App>
                <div className="panel panel-default col-sm-6">
                    <div className="panel-heading ">Register</div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmitRegister}>
                            <label>User name</label>
                            <input type={'text'} className="form-control" onChange={this.handleChangeName}/>
                            <label>Email</label>
                            <input type={'text'} className="form-control" onChange={this.handleChangeEmail}/>
                            <label>Password</label>
                            <input type={'password'} className="form-control"
                                   onChange={this.handleChangePassword}/>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmitRegister}>Đăng ky</button>
                            </div>
                        </form>
                    </div>
                </div>
            </App>
        )
    }
}
export default Register