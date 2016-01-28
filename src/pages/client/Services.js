'use strict';

import React, {Component} from 'react';

import drone from '../../images/drone.png';
import combatRobot from '../../images/combatRobot.png';
import softwareDevelopment from '../../images/softwareDevelopment.png';

export default class Services extends Component {
    render() {
        return (
            <div className="container">
                <div className="row no-margin eg-product-details">
                    <h4>Our expertise includes such disciplines as</h4>

                    <div className="row eg-product-container no-border">
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Autonomous Intelligent Control Systems and Machine Intelligence</li>
                                <li>Autonomous Intelligent Robots and Vehicles</li>
                                <li>Combat Robotics: Intelligent Air, Ground, and Sea Vehicles</li>
                                <li>Civil Applications for Intelligent Ground, Air, and Sea Vehicles</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={drone}/>
                        </div>
                    </div>

                    <div className="row eg-product-container no-border">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={combatRobot}/>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Intelligent Transportation Systems (ITS)</li>
                                <li>Future Combat Systems</li>
                                <li>Service and Field Robots</li>
                                <li>Factory and Office Automation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row eg-product-container no-border">
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Operations Research, Weapon, and C3I Systems Analysis</li>
                                <li>Simulation, Modeling, and Scenario Development</li>
                                <li>Software development</li>
                                <li>Technical Information Services, Seminars, and Workshops</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={softwareDevelopment}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}