import React, { Component } from 'react';

export default class NavigationBar extends Component {
    render() {
        return(
            <div className="eg-navigation">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
        );
    }
}