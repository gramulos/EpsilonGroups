import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eg-header">
                <div className="container">
                    <div className="site-logo"></div>
                    <div className="eg-quotes-box">
                        <blockquote>Science is a way of thinking much more than it is a body of knowledge.</blockquote>
                        <span>Carl Sagan</span>
                    </div>
                </div>
            </div>
        );
    }
}
