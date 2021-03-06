import React, { Component } from 'react';

import './Home.less';
import img_star from '../../images/start.png';
import img_customer from '../../images/customerSatisfaction.png';
import img_lamp from '../../images/lamp.png';
import img_price from '../../images/price.png';

export default class Body extends Component {

    render() {
        const mission = {
            height: '200px'
        };

        return (
            <div className="row no-margin">
                <div className="col-lg-12 col-md-12-col-sm-12 col-xs-12">
                    <div className="container">
                        <div className="row no-margin eg-product-details">
                            <h4>About us</h4>
                            <p>EPSILON GROUPS provides systems and services in the fields of intelligent systems, robotic vehicles (including unmanned ground, air, and sea vehicles), robotics and automation, weapons systems, intelligent control systems, intelligent transportation systems, intelligent manufacturing, and other advanced technology for government, industry, and not-for-profit clients.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12-col-sm-12 col-xs-12">
                    <div className="container">
                        <div className="row no-margin eg-product-details">
                            <h4>Our values</h4>
                            <p>Every company is founded according to some vales that define its future. We have chosen 4 main values since the foundation of EPSILON GROUPS and the company has been continuing its existence in accordance with these values. The values of our company are quality, customer satisfaction, innovativeness and reasonable prices.</p>
                            <br />

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 eg-full-width-container-sub">
                                <img src={img_star}/>
                                <h4>Quality</h4>
                                <p>Quality is the value that we have to talk about first. Exactly, this value supports the other values. Without quality the existence of other values just vanishes. Taking into account this, we constantly control the quality of our products and the projects that we realize and try to keep the high level of quality. Therefore, we can always confidently guarantee the high quality of our products.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 eg-full-width-container-sub">
                                <img src={img_customer}/>
                                <h4>Customer satisfaction </h4>
                                <p>Customer satisfaction takes the main place among the other values. In order to satisfy our customers some norms are accepted in our company so that all our employees follow these norms. The hotline that services continuously for our customers is active to receive any complains and suggestions. The great number of our satisfies customer is accepted as a sign of success that shows how customers satisfaction is highly valued in our company. </p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 eg-full-width-container-sub">
                                <img src={img_lamp}/>
                                <h4>Innovativeness</h4>
                                <p>Innovativeness is one of prior concepts of our company in the areas of technology and programming. These areas advance continuously and in order to keep pace with this development we try to make innovations. Otherwise, to gain any success is less probable. For this purpose, our employees are frequently sent to various seminars, trainings. Of course, as a result of hard work and professional development of our employees effect the continuous advance of our products.</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 eg-full-width-container-sub">
                                <img src={img_price}/>
                                <h4>Reasonable price</h4>
                                <p>Reasonable price is the main value that attracts customers. As soon as the production process finishes, the products are packed and shipped safely.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
