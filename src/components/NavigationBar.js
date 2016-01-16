import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { fetchClientMenu } from '../actions/index';
import Paper from 'material-ui/lib/paper';
import NavigationItem from './NavigationItem';
import Ink from 'react-ink';

import './NavigationBar.less';

const navigationMenu = [

    {text: "Home", icon: "home", link: '/', items: null},
    {
        text: "Products",
        icon: "view_carousel",
        link: "products",
        items: [
            {text: "Software", icon: "home", link: "x", items: null},
            {text: "Hardware", icon: "home", link: "x", items: null}
        ]
    },
    {
        text: "Services",
        icon: "style",
        link: "x",
        items: null
    },
    {
        text: "Research and development",
        link: 'x',
        icon: "developer_board",
        items: [
            {text: "3D printer", icon: "3d_rotation", link: 'x', items: null},
            {text: "Submarine", icon: "directions_boat", link: 'x', items: null},
            {text: "Drone", icon: "toys", link: 'x', items: null},
            {text: "Electro car", icon: "directions_car", link: 'x', items: null}
        ]
    },
    {text: "Contact us", icon: "flag", link: 'x', items: null}
];

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = { clientMenu: {} };
        this.props.fetchClientMenu();
    }

    render() {
        console.log(this.props.clientMenu);
        return (
            <Paper className="eg-navigation-bar" zDepth={1} rounded={false}>
                <nav className="container">
                    {this.renderMenuItems(navigationMenu, false)}
                </nav>
            </Paper>
        );
    }

    renderMenuItems(items, isSub) {
        var self = this;
        return (
            <ul className={isSub ? "navigation-sub" : "navigation-bar"}>
                {
                    items.map(function (item) {
                        if (!item.items) {
                            //return <NavigationItem text={item.text} link={item.text} onMouseOver={self.onMouseHover} key={item.text}/>;
                            return (
                                <li className="navigation-item" key={item.text}>
                                    <Link to={item.link}>
                                        {item.text}
                                        <Ink />
                                    </Link>
                                </li>);
                        }
                        else {
                            var text = item.text;
                            var subItems = self.renderMenuItems(item.items, true);

                            //return <NavigationItem text={text} subItems={subItems} link={item.text} key={item.text}/>;
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

function mapStateToProps({clientMenu}) {
    return {clientMenu}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchClientMenu}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
