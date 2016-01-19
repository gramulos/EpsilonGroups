import React, { Component } from 'react';

import './ProductsDetails.less';

export default class ProductDetails extends Component {
    render() {
        return (
            <div className="container">
                <h2>The code name is "VT".</h2>

                <p>Virtual trainer is assigned to train people for the purpose of enhancing their military skills and
                    musketry.</p>

                <p>Virtual trainer allows to:</p>
                <ul>
                    <li>Learn the basic rules of shooting</li>
                    <li>Get introduced with the parts of weapon</li>
                    <li>Study the security issues</li>
                    <li>Imitate shooting for the distance of 25m for the pistol Glock</li>
                    <li>Imitate shooting for the distance of 400m for the gun Kalashnikov</li>
                    <li>Practice shooting from different positions while moving from one point to the other one</li>
                </ul>
                <p>Functional possibilities</p>
                <ul>
                    <li>Practice of 3 trainees simultaneously and displaying the personal results of each shooter at the
                        same time as soon as the training is over
                    </li>
                    <li>Fixed, moving, appearing and disappearing objects</li>
                    <li>Wireless technology enables to shoot from different positions while moving advantages</li>
                    <li>Entirely secure- the laser gun with visible and non-visible emissions</li>
                    <li>The laser gun belongs to 1st class of laser products</li>
                    <li>The use of wireless technologies</li>
                    <li>Simple, comfortable and secure in use</li>
                    <li>Special training is not required for teachers.</li>
                </ul>
                <p>Work principle</p>

                <p>Video projector of a trainer receives the pictures from the computer and displays them on the screen.
                    The shooter shoots the targets appeared on the screen. On the time of shoot, the camera defines the
                    coordinates of the laser point and transfers them to the computer, where the calculations are
                    operated. Acoustic system creates the real sound of a gun. The result of each shoot is shown on the
                    screen. The final mark for the shoot depends on accuracy and speed. The result of shoots are saved
                    in protocol and can be printed in the future</p>

                <p>Set</p>
                <ul>
                    <li>Model of pistol Glok</li>
                    <li>Model of gun Kalashnikov</li>
                    <li>Maser model for Glok</li>
                    <li>Laser model for Kalashnikov</li>
                    <li>Training program</li>
                </ul>
                <p>Virtual trainer can be placed in a standart rooms. During the lessons, the models of a pistol and a
                    gun are used. Standart shooting exercises are given in a software. </p>
            </div>
        );
    }
}