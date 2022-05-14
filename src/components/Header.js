import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-info" href="#">Test Project</a>
                    <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                       {/* {this.state.show ? <MenuIcon /> : <CloseIcon />} */}
                    </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Submit Articles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }
}
