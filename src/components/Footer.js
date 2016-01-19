import React, { Component } from 'react';

import './Footer.less';

export default class Footer extends Component {
    render() {
        return (
            <div className="eg-footer">
                <div className="container">
                    <div className="row footer-group">
                        <div className="col-sm-4 footer-links">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Services</li>
                            <li>Research and development</li>
                        </div>
                        <div className="col-sm-4 footer-links">
                            <li>Privacy policy</li>
                            <li>Technology</li>
                            <li>Terms of use</li>
                            <li>Carrier</li>
                        </div>
                        <div className="col-sm-4 footer-links">
                            <li>Contact us</li>
                            <li>Socials</li>
                        </div>
                    </div>

                </div>
                <div className="footer-container">Copyright	&#169; 2016 EPSILON GROUPS. All Rights Reserved.</div>
            </div>
        );
    }
}