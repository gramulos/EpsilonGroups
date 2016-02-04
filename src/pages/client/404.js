'use strict';

import { fetchProductDetails } from '../../actions/index';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class notFound extends Component {

    render() {
        return (
            <div className="container">
                    <h2>404 Page not found</h2>
            </div>
        );
    }
}
