import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Button from './Button';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        };
    }

    componentDidMount(){
        let email = localStorage.getItem('email');
        this.setState({
            email: email
        });
    }

    render() { 
        return (
	        <div className="wrapper">
                <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link className="nav-link js-scroll-trigger" to={'/contact'}>Contact</Link>
                        </li>
                        <Button email={this.state.email} />
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="fa fa-comments-o"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><i className="fa fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i className="fa fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i className="fa fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell-o"></i>
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-envelope mr-2"></i> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-users mr-2"></i> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fa fa-file mr-2"></i> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i className="fa fa-th-large"></i></a>
                        </li>
                    </ul>
                </nav>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link">
                        <img src="../../../../AdminLTE3/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    <div className="sidebar">
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item has-treeview menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fa fa-dashboard"></i>
                                        <p>
                                            Dashboard
                                            <i className="right fa fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger nav-link active" to={'/'}><i className="fa fa-circle-o nav-icon"></i>Home</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v2</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </section>
                </div>
                <footer className="main-footer">
                    <strong>Copyright &copy; 2014-2018 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.0.0-alpha
                    </div>
                </footer>
                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>
        )
    }
}

export default App
