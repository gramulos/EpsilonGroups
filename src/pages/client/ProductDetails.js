'use strict';

import { fetchProductDetails } from '../../actions/index';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loader from '../../components/Loader';

import './ProductsDetails.less';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.productDetails.productDetails) {
            this.props.fetchProductDetails(this.props.params.product);
        }
    }

    render() {
        if(this.props.productDetails.productDetails && !this.props.productDetails.isLoading) {
            return (
                <div className="container" dangerouslySetInnerHTML={{__html: this.props.productDetails.productDetails.content}} />
            );
        }
        else {
            return <div></div>
        }
        //return (
        //    <div className="container">
        //        <div className="row no-margin eg-product-details">
        //            <h2>Military shooting simulator</h2>
        //
        //            <p>Virtual trainer is assigned to train people for the purpose of enhancing their military skills and musketry.</p>
        //            <br/>
        //            <div className="col-xs-12 eg-product-main-img">
        //                <img src={app_image_main} alt=""/>
        //            </div>
        //
        //            <>Virtual trainer allows</h4>
        //
        //            <div className="row eg-product-container no-border">
        //                <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
        //                    <ul className="eg-product-information">
        //                        <li>Learn the basic rules of shooting</li>
        //                        <li>Get introduced with the parts of weapon</li>
        //                        <li>Study the security issues</li>
        //                        <li>Imitate shooting for the distance of 25m for the pistol Glock</li>
        //                        <li>Imitate shooting for the distance of 400m for the gun Kalashnikov</li>
        //                        <li>Practice shooting from different positions while moving from one point to the other one</li>
        //                    </ul>
        //                </div>
        //                <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
        //                    <img src={app_image}/>
        //                </div>
        //            </div>
        //
        //            <h4>Functional possibilities</h4>
        //
        //            <div className="row eg-product-container">
        //                <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
        //                    <img src={app_image_2}/>
        //                </div>
        //                <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
        //                    <ul className="eg-product-information">
        //                        <li>Practice of 3 trainees simultaneously and displaying the personal results of each shooter at the same time as soon as the training is over</li>
        //                        <li>Fixed, moving, appearing and disappearing objects</li>
        //                        <li>The laser gun belongs to 1st class of laser products</li>
        //                    </ul>
        //                </div>
        //            </div>
        //
        //            <div className="row eg-product-container">
        //                <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
        //                    <ul className="eg-product-information">
        //                        <li>Wireless technology enables to shoot from different positions while moving advantages</li>
        //                        <li>Entirely secure the laser gun with visible and non-visible emissions</li>
        //                        <li>The use of wireless technologies</li>
        //                    </ul>
        //                </div>
        //                <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
        //                    <img src={app_image_wifi}/>
        //                </div>
        //            </div>
        //
        //            <div className="row eg-product-container">
        //                <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
        //                    <img src={app_image_vt_results}/>
        //                </div>
        //                <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
        //                    <ul className="eg-product-information">
        //                        <li>Simple, comfortable and secure in use</li>
        //                        <li>Special training is not required for teachers.</li>
        //                    </ul>
        //                </div>
        //            </div>
        //
        //            <h4>Work principle</h4>
        //
        //            <p>Video projector of a trainer receives the pictures from the computer and displays them on the screen. The shooter shoots the targets appeared on the screen. On the time of shoot, the camera defines the coordinates of the laser point and transfers them to the computer, where the calculations are operated. Acoustic system creates the real sound of a gun. The result of each shoot is shown on the screen. The final mark for the shoot depends on accuracy and speed. The result of shoots are saved in protocol and can be printed in the future.</p>
        //
        //            <h4>Set</h4>
        //
        //            <div className="row" style={{marginBottom:"50px"}}>
        //                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 eg-product-package">
        //                    <img src={app_image_package} alt=""/>
        //                </div>
        //                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        //                    <ul className="eg-product-information" style={{height:"200px"}}>
        //                        <li>Model of pistol Glok</li>
        //                        <li>Model of gun Kalashnikov</li>
        //                        <li>Laser model for Glok</li>
        //                        <li>Laser model for Kalashnikov</li>
        //                        <li>Training program</li>
        //                    </ul>
        //                </div>
        //            </div>
        //
        //
        //            <p>Virtual trainer can be placed in a standart rooms. During the lessons, the models of a pistol and agun are used. Standart shooting exercises are given in a software. </p>
        //        </div>
        //    </div>
        //);
    }
}

function mapStateToProps({productDetails}) {
    return {productDetails}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchProductDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
