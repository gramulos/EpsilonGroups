import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

import './App.less';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavigationBar />
                Body
                <Footer />
            </div>
        );
    }
}
