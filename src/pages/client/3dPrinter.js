'use strict';

import { fetchProductDetails } from '../../actions/index';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from '../../components/Loader';

import './ProductsDetails.less';

import printer from '../../images/3dPrinter.png';

export default class tdPrinter extends Component {

    render() {
        return (
            <div className="container">
                <div className="row no-margin eg-product-details">
                    <h2>3D printer</h2>

                    <p>3D-принтер с огромной камерой печати объемом 1,3 кубических метра! Он способен создавать прочные изделия из различных типов пластика высотой до 1,1 метра. Этот принтер разработан специально для тех, кто хочет получить от 3D-принтера возможность быстрого создания действительно больших изделий. Это устройство прекрасно подойдет инженерам, дизайнерам, архитекторам, конструкторам в самых разных отраслях. Высокая скорость печати, надежность и доступная цена делают его привлекательным вариантом для быстрого производства прототипов продукции (мебели, конструкций), мастер-моделей для литья скульптур и решения многих других задач.
                    </p>
                    <br/>
                    <div className="col-xs-12 eg-product-main-img">
                        <img src={printer} alt=""/>
                    </div>

                    <h4>Virtual trainer allows</h4>

                    <div className="row eg-product-container no-border">
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Learn the basic rules of shooting</li>
                                <li>Get introduced with the parts of weapon</li>
                                <li>Study the security issues</li>
                                <li>Imitate shooting for the distance of 25m for the pistol Glock</li>
                                <li>Imitate shooting for the distance of 400m for the gun Kalashnikov</li>
                                <li>Practice shooting from different positions while moving from one point to the other one</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={printer}/>
                        </div>
                    </div>

                    <h4>Functional possibilities</h4>

                    <div className="row eg-product-container">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={printer}/>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Practice of 3 trainees simultaneously and displaying the personal results of each shooter at the same time as soon as the training is over</li>
                                <li>Fixed, moving, appearing and disappearing objects</li>
                                <li>The laser gun belongs to 1st class of laser products</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row eg-product-container">
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Wireless technology enables to shoot from different positions while moving advantages</li>
                                <li>Entirely secure the laser gun with visible and non-visible emissions</li>
                                <li>The use of wireless technologies</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={printer}/>
                        </div>
                    </div>

                    <div className="row eg-product-container">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={printer}/>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <ul className="eg-product-information">
                                <li>Simple, comfortable and secure in use</li>
                                <li>Special training is not required for teachers.</li>
                            </ul>
                        </div>
                    </div>

                    <h4>Work principle</h4>

                    <p>Video projector of a trainer receives the pictures from the computer and displays them on the screen. The shooter shoots the targets appeared on the screen. On the time of shoot, the camera defines the coordinates of the laser point and transfers them to the computer, where the calculations are operated. Acoustic system creates the real sound of a gun. The result of each shoot is shown on the screen. The final mark for the shoot depends on accuracy and speed. The result of shoots are saved in protocol and can be printed in the future.</p>

                    <h4>Technical specification</h4>

                    <div className="row" style={{marginBottom:"50px"}}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <table>
                                <tr>
                                    <td>Size (mm):</td>
                                    <td>L: 1505, W: 1260, H: 1326</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <p>Virtual trainer can be placed in a standart rooms. During the lessons, the models of a pistol and agun are used. Standart shooting exercises are given in a software. </p>
                </div>
            </div>
        );
    }
}
