import React, { Component } from 'react';

import './Products.less';

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="http://epsilongroups.com/images/dizayn2.jpg"/>
                            <div className="caption">
                                <h3>VT v2.0</h3>
                                <p>The code name is "VT". Virtual trainer is assigned to train people for the purpose of enhancing their military skills and musketry.</p>
                                <p><a href="#/software/vt" className="btn btn-primary" role="button">View product</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="http://yes2study.com/wp-content/uploads/2015/08/university-of-sydney.jpg"/>
                            <div className="caption">
                                <h3>Electron university</h3>
                                <p>The code name is "VT". Virtual trainer is assigned to train people for the purpose of enhancing their military skills and musketry.</p>
                                <p><a href="#" className="btn btn-primary" role="button">View product</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="http://i.telegraph.co.uk/multimedia/archive/03130/medium-3-3d53e7185_3130912c.jpg"/>
                            <div className="caption">
                                <h3>Super Drone</h3>
                                <p>The code name is "VT". Virtual trainer is assigned to train people for the purpose of enhancing their military skills and musketry.</p>
                                <p><a href="#" className="btn btn-primary" role="button">View product</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
