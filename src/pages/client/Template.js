'use strict';

import { fetchClientMenu } from '../../actions/index';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader.js';
import HomePage from './Home';

import '../../components/App.less';

class ClientPage extends Component {
    constructor(props) {
        super(props);

        this.props.fetchClientMenu();
    }

    render() {
        if(this.props.clientMenu.menu && !this.props.clientMenu.isLoading) {
            return (
                <div className="site-root-container eg-activate">
                    <Header />
                    <NavigationBar clientMenu={this.props.clientMenu} />
                    {this.renderContent()}
                    <Footer />
                </div>
            );
        }
        else {
            return <Loader />
        }
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

function mapStateToProps({clientMenu}) {
    return {clientMenu}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchClientMenu}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)