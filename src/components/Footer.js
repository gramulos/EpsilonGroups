import React, { Component } from 'react';

import './Footer.less';

export default class Footer extends Component {
    render () {
        var line = {
            height: '15px',
            width: '100%',
            float: 'left',
            backgroundColor: '#45408e'
        };
        return (
            <div className="eg-footer">
                <div style={line}></div>
                <div className="container">
                    <div className="row footer-group">
                        <div className="col-sm-4 footer-links" style={{marginLeft:'15px'}}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Events</li>
                            <li>Research and Development</li>
                        </div>
                        <div className="col-sm-4 footer-links">
                            <li>Privacy policy</li>
                            <li>Technology</li>
                            <li>Terms of use</li>
                            <li>Carrier</li>
                        </div>
                        <div className="col-sm-4 footer-links" style={{marginLeft:'-15px'}}>
                            <li>Contact us</li>
                            <li>You can also follow us on our social media channels</li>
                            <div className="eg-socials">
                                <i className="fa fa-facebook-official"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-linkedin"></i>
                                <i className="fa fa-youtube"></i>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-container">Copyright	<i className="fa fa-copyright"></i> 2016 EPSILON GROUPS.<br/> All Rights Reserved.</div>
            </div>
        );
    }
}