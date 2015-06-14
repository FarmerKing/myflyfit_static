import React from "react";
import Underscore from "underscore";
import Request from "superagent";
import Select from "react-select";
import Classnames from "classnames";

import {Input, Button} from "react-bootstrap"

import {IssueTypes, IssueSubTypes} from "../data/ContactUs.js";


require("../../assets/stylesheets/ContactUsApp.less");

const Step1 = React.createClass({
    propTypes: {
        issueType: React.PropTypes.object,
        issueSubType: React.PropTypes.object,
        onChangeIssueType: React.PropTypes.func,
        onChangeIssueSubType: React.PropTypes.func,
    },

    componentDidUpdate: function(prevProps, prevState) {
        if(this.props.issueTypeStatus && this.props.issueTypeStatus == "error"){
            this.refs.issueType.focus();
        }else if(this.props.issueSubTypeStatus && this.props.issueSubTypeStatus == "error"){
            this.refs.issueSubTypes.focus();
        }
    },

    render () {
        return (
            <div>
                <div className={Classnames("form-group", {"has-error": this.props.issueTypeStatus && this.props.issueTypeStatus == "error"})}>
                    <label className="control-label">Issue Type *</label>
                    <Select name="issueType" ref="issueType" value={this.props.issueType}
                            onChange={ (_, issueType) => {
                                if( this.props.issueType && issueType[0].value == this.props.issueType.value){
                                    ; // skip
                                }else{
                                    this.props.onChangeIssueType(issueType[0]);
                                }
                            }}
                            placeholder="Please select a category"
                            searchable={false}
                            options={IssueTypes}
                    />
                </div>
                <div className={Classnames("form-group", {"has-error": this.props.issueSubTypeStatus && this.props.issueSubTypeStatus == "error"})}>
                    <label className="control-label">Issue Subtype *</label>
                    <Select name="issueSubTypes" ref="issueSubTypes" 
                            value={this.props.issueSubType}
                            disabled={!this.props.issueType}
                            placeholder="Please select a sub category"
                            searchable={false} 
                            onChange={ (_,issueSubType) => {
                                this.props.onChangeIssueSubType(issueSubType[0]) 
                            }}
                            options={this.props.issueType?IssueSubTypes[this.props.issueType.value]:[]}
                    />
                </div>
            </div>
        );
    }
});

const Step2 = React.createClass({
    propTypes: {
        // the state in App 
        onChange: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            onChange: function(){ return 0;}
        };
    },

    componentDidUpdate: function(prevProps, prevState) {
        if( !this.props.submit ) return; 
        Underscore(Object.keys(this.refs)).some( ref => {
            if( this.props[`${ref}Status`] ){
                this.refs[ref].getInputDOMNode().focus();
                return true;
            }
        });
    },

    render () {
        return (
            <div>
                <div className="form-group">
                    <label className="control-label">* = required field</label>
                </div>
                <Input name="firstname" ref="firstName" type="text" hasFeedback 
                       value={this.props.firstName}
                       bsStyle={this.props.firstNameStatus || ""}
                       help={this.props.firstNameHelp || ""}
                       onChange={ e => this.props.onChange("firstName", this.refs.firstName.getValue())}
                       label="First Name *"/>
                <Input name="lastname" ref="lastName" type="text" hasFeedback 
                       value={this.props.lastName}
                       bsStyle={this.props.lastNameStatus || ""}
                       help={this.props.lastNameHelp || ""}
                       onChange={ e => this.props.onChange("lastName", this.refs.lastName.getValue())}
                       label="Last Name *"/>
                <Input name="email" ref="email" type="text" hasFeedback 
                       value={this.props.email}
                       bsStyle={this.props.emailStatus || ""}
                       help={this.props.emailHelp || ""}
                       onChange={ e => this.props.onChange("email", this.refs.email.getValue())}
                       label="Email *"/>
                <Input name="phone" ref="phone" type="text" 
                       value={this.props.phone}
                       onChange={ e => this.props.onChange("phone", this.refs.phone.getValue())}
                       label="Phone"/>
                <Input name="subject" ref="subject" type="text" hasFeedback 
                       value={this.props.subject}
                       bsStyle={this.props.subjectStatus || ""}
                       help={this.props.subjectHelp || ""}
                       onChange={ e => this.props.onChange("subject", this.refs.subject.getValue())}
                       label="Subject *" 
                       placeholder="Please enter a subject"/>
                <Input name="description" ref="description" type="textarea" hasFeedback 
                       value={this.props.description}
                       bsStyle={this.props.descriptionStatus || ""}
                       help={this.props.descriptionHelp || ""}
                       onChange={ e => this.props.onChange("description", this.refs.description.getValue())}
                       label="Description *" 
                       placeholder="Please explain your issue"/>
                <Input name="country" ref="shippingCountry" type="text" hasFeedback 
                       value={this.props.shippingCountry}
                       bsStyle={this.props.shippingCountryStatus || ""}
                       help={this.props.shippingCountryHelp || ""}
                       onChange={ e => this.props.onChange("shippingCountry", this.refs.shippingCountry.getValue())}
                       label="Shipping Country *" />
                <Input name="ordernumber" ref="orderNumber" type="text" hasFeedback 
                       value={this.props.orderNumber}
                       bsStyle={this.props.orderNumberStatus || ""}
                       help={this.props.orderNumberHelp || ""}
                       onChange={ e => this.props.onChange("orderNumber", this.refs.orderNumber.getValue())}
                       label="Order Number"/>
            </div>
        );
    }
});

const requiredFields = ["issueType", "issueSubType", "firstName", 
                        "lastName", "email", 
                        "subject", "description", "shippingCountry"];

const App = React.createClass({
    getInitialState () {
        return {
            step: 1,
            issueType: null,
            issueSubType: null,
            isInSubmit: false,

            firstName: "",
            lastName: "", 
            email: "", 
            phone: "", 
            subject: "", 
            description: "",
            shippingCountry: "", 
            orderNumber: ""
        };
    },

    onSubmit (e) {
        var newState = { submit: true };
        var submit = true; 
        e.preventDefault();

        for ( let i in requiredFields ) {
            let requiredKey = requiredFields[i];
            if( !this.state[requiredKey] ){
                newState[`${requiredKey}Status`] = "error"; 
                submit = false;
            }else{
                newState[`${requiredKey}Status`] = null;
            }
        }

        if(submit){
          var data = Object.assign({}, this.state, {
            issueType: this.state.issueType.label || "", 
            issueSubType: this.state.issueSubType.label || "", 
          })
          Request.post("//54.65.94.248:3000/contactUs")
          .set("Accept", "application/json")
          .query(data)
          .end( (e,res) => {
              if(e || !res.status.toString().match(/^2/) ){
                console.log("error");
              }else{
                alert("Messages sent to service@myflyfit.com")
                this.setState({
                  submit:false,
                  isInSubmit: false,
                  issueType: null,
                  issueSubType: null,
                  firstName: "",
                  lastName: "", 
                  email: "", 
                  phone: "", 
                  subject: "", 
                  description: "",
                  shippingCountry: "", 
                  orderNumber: ""
                });
              }
          });
          this.setState({
            isInSubmit: true
          });
        }else{
            this.setState(newState);
        }
    },

    render() {
        return (
            <div>
                <div className="row" style={{margin: "50px 20px"}}>
                    <div className="col-xs-12">
                        <h3>How can we help?</h3>
                        <Step1 onChangeIssueType={ issueType=> this.setState({ issueType, issueSubType:null }) } 
                               onChangeIssueSubType={ issueSubType=> this.setState({ issueSubType}) }
                               {...this.state} />
                        <Step2 {...this.state} 
                               onChange={(key, value)=>{
                                    var newState = {submit: false}; 
                                    newState[key] = value;
                                    if(value){
                                        newState[`${key}Status`] = null;
                                    }
                                    this.setState(newState);
                               }}/>
                        <Button disabled={this.state.isInSubmit} onClick={this.onSubmit}>{this.state.isInSubmit?"Submitting...":"Submit"}</Button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
