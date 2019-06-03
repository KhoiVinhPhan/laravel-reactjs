// resources/assets/js/components/CreateUser.js

import React, { Component } from 'react'
import App from '../layouts/App'
import axios from 'axios'
import Pagination from "react-js-pagination";
import { Redirect, Link } from 'react-router-dom';

class Index extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			url: 'api/users',
			pagination: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount:1,
            pageRangeDisplayed: 5,
            valueSearch: '',
            loading: true
		};

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
	}

	componentDidMount(){
		this.handlePageChange();
	}

    // getData() {
    //     axios.get(this.state.url)
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({ 
    //                 data: response.data.data,
    //                 activePage: response.data.current_page,
    //                 itemsCountPerPage: response.data.per_page,
    //                 totalItemsCount: response.data.total,
    //             });
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         })
    // }

    //pagination
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        let url = window.Laravel.baseUrl + '/api/users?value=' + this.state.valueSearch + '&page=' + pageNumber;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({ 
                    data: response.data.data,
                    activePage: response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    loading: false
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

	
	fetchRows() {
        if (this.state.loading) {
            return (
                <tr>
                    <td rowSpan="3"><h2>Loading...</h2></td>
                </tr>
            );
        } else {
            if (this.state.data instanceof Array) {
                return this.state.data.map((object, i) => {
                    return (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{object.id}</td>
                            <td>{object.email}</td>
                        </tr>
                    );
                })
            }
        }
        
    }

    handleChangeSearch(e) {
        this.setState({
            valueSearch: e.target.value
        });
    }

    handleSubmitSearch(e) {
        e.preventDefault();
        let url = window.Laravel.baseUrl + '/api/users?value=' + this.state.valueSearch;
        const data = {
            value: this.state.valueSearch,
        }
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({ 
                    data: response.data.data,
                    activePage: response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

	render () {
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
                <div className="form-group">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Users</h1>
                        </div>
                        <div className="col-sm-6">
                            <Link className="btn btn-success pull-right" to={'/users/create'}>Create</Link>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmitSearch}>
                    <div className="input-group">
                        <input type="text" value={this.state.valueSearch} onChange={this.handleChangeSearch} className="form-control" placeholder="Search email" />
                        <div className="input-group-btn">
                            <button className="btn btn-info" type="submit" >
                                Search
                            </button>
                        </div>
                    </div>
                </form>

	        	<table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>ID</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fetchRows()}
                    </tbody>
                </table>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
	      	</App>
	    );
	}
}

export default Index