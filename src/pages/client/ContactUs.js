'use strict';

import React, { Component } from 'react';
import { fetchMessageSubject } from '../../actions/index';
import { bindActionCreators } from 'redux';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import nodemailer from 'nodemailer';

const smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "epsilongroups2016@gmail.com",
        pass: "qaz123WSX!@#"
    }
});

const mailOptions = {
    from: "Fred Foo ✔ <foo@blurdybloop.com>", // sender address
    to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
};

class Contacts extends Component {
    handleOnClick() {
        console.log(this.props.fields);
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });
    }

    render() {
        const {fields: {subject, message, email}} = this.props;

        var styles = {
            errorStyle: {
                color: Colors.deepPurple700
            },
            underlineStyle: {
                borderColor: Colors.deepPurple700
            },
            btnStyle: {
                marginTop: '15px'
            },
            containerMargin: {
                margin: '0 15px'
            }
        };
        return (
            <div className="container">
                <div className="row no-margin eg-product-details">
                    <h4>Contact us</h4>

                    <div className="row" style={styles.containerMargin}>
                        <TextField
                            hintText="Detailed review for product"
                            floatingLabelText="Subject"
                            fullWidth={true}
                            floatingLabelStyle={styles.errorStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            {...subject}/>
                        <TextField
                            hintText="contact@email.com"
                            floatingLabelText="Email for contact"
                            fullWidth={true}
                            floatingLabelStyle={styles.errorStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            {...email}/>
                        <TextField
                            hintText="Here you can put your message"
                            floatingLabelText="Message"
                            multiLine={true}
                            rows={1}
                            fullWidth={true}
                            floatingLabelStyle={styles.errorStyle}
                            underlineFocusStyle={styles.underlineStyle}
                            {...message}/>
                        <RaisedButton backgroundColor="#45408e" style={styles.btnStyle} label="Send email" secondary={true} onClick={this.handleOnClick.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

Contacts = reduxForm({
    form: 'contact',
    fields: ['message', 'subject', 'email']
})(Contacts);

export default Contacts;