import React, { Component } from 'react';

import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="col-md-12">Header</div>
                </div>
            </div>
        );
    }
}
