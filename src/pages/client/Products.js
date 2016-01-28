import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import './Products.less';
import './Site.less';

import vt_image from '../../images/software/vt/soldier.png';
import td_printer from '../../images/3dPrinter.png';

export default class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row no-margin card-container">
                    <br />
                    <div className="row eg-product-container">
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <div className="eg-product-information">
                                <h1>Military shooting simulator</h1>
                                <div className="eg-product-description">The code name is "VT". Virtual trainer is assigned to train people for the purpose of enhancing their military skills and musketry.</div>
                                <Link to="/software/vt"><RaisedButton backgroundColor="#45408e" label="View product" secondary={true} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={vt_image}/>
                        </div>
                    </div>
                    <div className="row eg-product-container">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 eg-product-image">
                            <img src={td_printer}/>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                            <div className="eg-product-information">
                                <h1>3D printer</h1>
                                <div className="eg-product-description">
                                    Our printer offers extra camera printing, built-in control panel, the new print head with larger nozzles and many other features that make the printer faster and more productive.</div>
                                <Link to="/hardware/3d_printer"><RaisedButton backgroundColor="#45408e" label="View product" secondary={true} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
