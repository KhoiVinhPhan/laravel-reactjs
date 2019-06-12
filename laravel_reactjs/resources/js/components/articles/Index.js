import React, { Component } from 'react'
import App from '../layouts/App'
import axios from 'axios'
import Pagination from "react-js-pagination";
import { Redirect, Link } from 'react-router-dom';

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		
	}

	render(){
		let login = localStorage.getItem('jwt');
	    if (!login) {
	        return (
	            <div>
	                <Redirect to='login'/>
	            </div>
	        )
	    }
		return(
			<App>
                <div className="form-group">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Articles</h1>
                        </div>
                        <div className="col-sm-6">
                            <Link className="btn btn-success pull-right" to={'/users/create'}>Create</Link>
                        </div>
                    </div>
                </div>
                

	        	<table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Images</td>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                
	      	</App>
		)
	}
}

export default Index