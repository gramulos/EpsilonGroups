import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class NavigationItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to={this.props.link}>
                <li className="navigation-item">{this.props.text}</li>
            </Link>
        )
    }
}