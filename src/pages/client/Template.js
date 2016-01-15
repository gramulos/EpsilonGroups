import React, { Component } from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import HomePage from './Home';

export default class ClientPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Header />
                <NavigationBar />
                {this.renderContent()}
                <Footer />
            </div>
        );
    }

    renderContent() {
        if(this.props.children) {
            return this.props.children
        }
        else {
            return <HomePage />
        }
    }
}