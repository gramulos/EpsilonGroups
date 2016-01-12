import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper className="eg-header" zDepth={1} rounded={false}>
                <div className="container">
                    Header
                </div>
            </Paper>
        );
    }
}
