'use strict';

import React, { Component } from 'react';
import { sendEmail } from '../../actions/index';
import { bindActionCreators } from 'redux';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';

class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick() {

        var mailOptions = {
            name: this.props.fields.subject.value,
            email: this.props.fields.email.value,
            message: this.props.fields.message.value,
            emailTo: 'gramulos@gmail.com'
        };
        console.log(mailOptions);
        this.props.sendEmail(mailOptions);
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
                        <RaisedButton backgroundColor="#45408e" style={styles.btnStyle} label="Send email" secondary={true} onClick={this.handleOnClick.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendEmail}, dispatch);
}

Contacts = reduxForm({
    form: 'contact',
    fields: ['message', 'subject', 'email']
})(Contacts);

export default connect(null, mapDispatchToProps)(Contacts);