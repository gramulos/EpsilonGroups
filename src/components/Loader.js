'use strict';

import React, { Component } from 'react';

import './Loader.less';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="sk-rotating-plane"></div>
            </div>
        );
    }
}