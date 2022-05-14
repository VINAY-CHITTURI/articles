import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <section className="content-banner">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12">
                                <div className="banner-con text-center">
                                    <p className="first-title">First content</p>
                                    <p className="banner-des">Grow your instagram with us</p>
                                    <a href="#" target="_blank" className="banner-btn">Get started for free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}