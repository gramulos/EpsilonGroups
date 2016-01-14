import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import NavigationItem from './NavigationItem';
import Ink from 'react-ink';

import './NavigationBar.less';

const navigationMenu = [
    {text: "Home", icon: "home", link: 'x', items: null},
    {
        text: "Projects",
        icon: "extension",
        link: null,
        items: [
            {text: "3D printer", icon: "3d_rotation", link: 'x', items: null},
            {text: "Submarine", icon: "directions_boat", link: 'x', items: null},
            {text: "Drone", icon: "toys", link: 'x', items: null},
            {text: "Electro car", icon: "directions_car", link: 'x', items: null}
        ]
    },
    {
        text: "Products",
        icon: "view_carousel",
        link: 'x',
        items: [
            {text: "Software", icon: "home", link: 'x', items: null},
            {text: "Hardware", icon: "home", link: 'x', items: null}
        ]
    },
    {
        text: "Services",
        icon: "style",
        link: 'x',
        items: null
    },
    {text: "Research and development", link: 'x', icon: "developer_board", items: null},
    {text: "Contact us", icon: "flag", link: 'x', items: null}
];

export default class NavigationBar extends Component {
    render() {
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
                                    {item.text}
                                    <Ink />
                                </li>);
                        }
                        else {
                            var text = item.text;
                            var subItems = self.renderMenuItems(item.items, true);

                            //return <NavigationItem text={text} subItems={subItems} link={item.text} key={item.text}/>;
                            return (
                                <li
                                    className="navigation-item"
                                    onMouseOver={self.onMouseHover}
                                    key={item.text}>
                                    {item.text}
                                    {self.renderMenuItems(item.items, true)}
                                </li>);
                        }
                    })
                }
            </ul>
        )
    }

    onMouseHover(event) {
    }
}