'use strict';

import React, { Component } from 'react';

import './Loader.less';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
                <div className="loading-text">LOADING</div>
            </div>
        );
    }
}