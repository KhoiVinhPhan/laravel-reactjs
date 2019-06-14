import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import App from '../layouts/App';
import axios from 'axios';
import CKEditor from 'ckeditor4-react';


class Create extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			content: '',
			status: 0
		};
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeContent = this.handleChangeContent.bind(this);
		this.handleChangeStatus = this.handleChangeStatus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeTitle(e){
		this.setState({
			title: e.target.value
		});
	}

	handleChangeContent(e){
		this.setState({
			content: e.editor.getData()
		});
	}

	handleChangeStatus(e){
		this.setState({
			status: e.target.value
		});
	}



	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.title);
		console.log(this.state.content);
		console.log(this.state.status);
		// let url = '/api/users/create';
		// axios.post(url, this.state).then( (response) => {
		// 	if (response.status == 200) {
  //               this.props.history.push('/users');
  //           }
		// } )
	}

	render() {
		let login = localStorage.getItem('jwt');
        if (!login) {
            return (
                <div>
                    <Redirect to='/login'/>
                </div>
            )
        }
		return (
			<App>
            	<div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                        	<div className="row">
		                    	<div className="col-sm-9">
		                        	<label>Title</label>
		                            <input type={'text'} className="form-control" onChange={this.handleChangeTitle}/>
		                            <label>Content</label>
		                           	<CKEditor
					                    data=""
					                    onChange={this.handleChangeContent}
					                />
		                            <div className="form-group">
		                                <button className="btn btn-primary" type="submit">Create</button>
		                            </div>
		                        </div>
		                        <div className="col-sm-3">
		                        	<div className="form-group">
									  	<label htmlFor="sel1">Status:</label>
									  	<select className="form-control" id="sel1" onChange={this.handleChangeStatus}>
										    <option value="0">Public</option>
										    <option value="1">Private</option>
									  	</select>
									</div>
		                        </div>
		                    </div>
                        </form>
                    </div>
                </div>
			</App>
		)
	}
}

export default Create