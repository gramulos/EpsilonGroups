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
                    Header
                </div>
            </div>
        );
    }
}
