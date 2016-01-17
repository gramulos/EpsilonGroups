'use strict';

import { fetchClientMenu } from '../actions/index';
import { Router, Route, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavigationItem from './NavigationItem';
import Paper from 'material-ui/lib/paper';
import Ink from 'react-ink';

import './NavigationBar.less';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);

        //this.props.fetchClientMenu();
    }

    render() {
        //if(this.props.clientMenu.menu && !this.props.clientMenu.isLoading) {
            return (
                <Paper className="eg-navigation-bar" zDepth={1} rounded={false}>
                    <nav className="container">
                        {this.renderMenuItems(this.props.clientMenu.menu, false)}
                    </nav>
                </Paper>
            );
        //}
        //else {
        //    return <div>Loading</div>
        //}
    }

    renderMenuItems(items, isSub) {
        var self = this;
        return (
            <ul className={isSub ? "navigation-sub" : "navigation-bar"}>
                {
                    items.map(function (item) {
                        if (!item.items) {
                            return (
                                <li className="navigation-item" key={item.text}>
                                    <Link to={item.link}>
                                        {item.text}
                                        <Ink />
                                    </Link>
                                </li>);
                        }
                        else {
                            return (
                                <li className="navigation-item" key={item.text}>
                                    <Link to={item.link}>
                                        {item.text}
                                        <Ink />
                                    </Link>
                                    {self.renderMenuItems(item.items, true)}
                                </li>
                            );
                        }
                    })
                }
            </ul>
        )
    }
}

//function mapStateToProps({clientMenu}) {
//    return {clientMenu}
//}
//
//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({fetchClientMenu}, dispatch);
//}
//
//export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
