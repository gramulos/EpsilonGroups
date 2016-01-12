import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import NavigationItem from './NavigationItem';

import './NavigationBar.less';

const navigationMenu = [
    {text: "Home", icon: null, link: 'x', items: null},
    {
        text: "Projects",
        icon: null,
        link: null,
        items: [
            {text: "3D printer", icon: null, link: 'x', items: null},
            {text: "Submarine", icon: null, link: 'x', items: null},
            {text: "Drone", icon: null, link: 'x', items: null},
            {text: "Electro car", icon: null, link: 'x', items: null}
        ]
    },
    {text: "Products", icon: null, link: 'x', items: null},
    {text: "Services", icon: null, link: 'x', items: null},
    {text: "Research and development", link: 'x', icon: null, items: null},
    {text: "Contact us", icon: null, link: 'x', items: null}
];

export default class NavigationBar extends Component {
    render() {
        return(
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
                        if(!item.items) {
                            return <li className="navigation-item" key={item.text} onMouseOver={self.onMouseHover}>{item.text}</li>
                        }
                        else {
                            return <li className="navigation-item" key={item.text}>{item.text} {self.renderMenuItems(item.items, true)}</li>
                        }
                    })
                }
            </ul>
        )
    }

    onMouseHover(event) {
        console.log(event.target.childNodes);
    }
}