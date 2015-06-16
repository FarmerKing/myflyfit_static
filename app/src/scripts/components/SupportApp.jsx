import React from "react";
import Underscore from "underscore";
import Classnames from "classnames";

import {Input, Button} from "react-bootstrap"


var tree = [
    {
        text: "FlyFit App",
        ref: "support-flyfit",
        content: "Follow these steps to start using FlyFit for the first time!",
        nodes: [
            {
                text: "Getting Started (download)",
                ref: "support-flyfit-gs",
                content: "",
                nodes: [
                    {
                        text: "Download the FlyFIt App to your smartphone",
                        ref: "support-flyfit-gs-download"
                    },
                    {
                        text: "Create your FlyFit account",
                        ref: "support-flyfit-gs-create",
                        content: "When you first open Flyfit app, you will be prompted to create a new account either by selecting “Login with Facebook” or “Sign up with Email”. Once creating an account, Flyfit will ask you for your nickname, gender, height and weight. By providing this information, Flyfit will be able to accurately track your calorie burn and other biometrics. Don’t worry, this information will always be kept private."
                    }
                ]
            },
            {
                text: "Pair Flyfit with the FlyFit App",
                ref: "support-flyfit-pair",
                nodes: [
                    {
                        text: "Bluetooth Setting", 
                        ref: "support-flyfit-pair-bt",
                        content: "Go into your mobile device’s Settings → Bluetooth → Swipe “On”"
                    },
                    {
                        text: "Tap the Flyfit icon at the top­right corner to pair your flyfit",
                        ref: "support-flyfit-pair-tap"
                    }
                ]
            },
            {
                text: "Sync",
                ref: "support-flyfit-sync",
                content: "After pairing, Flyfit will automatically sync data with your smartphone or pad each time tapping the Flyfit icon. Multiple syncing within the same day is power consumptive.", 
            },
            {
                text: "Battery Life",
                ref: "support-flyfit-battery",
                nodes: [ 
                    {
                        text: "You can check battery life in the Flyfit info section as long as device is connected.",
                        ref: "support-flyfit-battery-n1"
                    },
                    {
                        text: "Device will automatically switches to system sleep to consumpt power.",
                        ref: "support-flyfit-battery-n2"
                    }
                ]
            },
            {
                text: "Home",
                ref: "support-flyfit-home"
            },
            {
                text: "Wake Up Alarm & Sleep Reminder",
                ref: "support-flyfit-wake",
                content: "You can set wake up alarm and reminder in Flyfit info section."
            },
            {
                text: "Statistic",
                ref: "support-flyfit-st", 
                nodes: [
                    {
                        text: "Check out your daily/weekly/monthly statistic of your activity!", 
                        ref: "support-flyfit-st-n1"
                    }
                ]
            },
        ]
    },
    {
        text: "Product Manuals",
        ref: "support-pm",
        nodes: [
            {
                text: "Features",
                ref: "support-pm-feature"
            },
            {
                text: "Basic",
                ref: "support-pm-basic",
                nodes: [
                    {
                        text: "Charging",
                        ref: "support-pm-basic-charging",
                        content: "To ensure full battery during your first workout, remove your Flyfit device from the package and charge it using the included charging pad and cable. Connect the charging cable to the charging pad and insert the other end to a USB port on a computer or a standard USB wall adapter. Make sure the logos on the charger and the tracker should be on the same side."
                    },
                    {
                        text: "Installing", 
                        ref: "support-pm-basic-install",
                        content: "Install the tracker into the ankle band with the same side of logo."
                    },
                    {
                        text: "Wake it up",
                        ref: "support-pm-basic-wake",
                        content: "Press the button at the bottom to wake up your Flyfit. You can keep pressing button to switch between different modes."
                    }
                ]
            },
            {
                text: "Overview(Icons)",
                ref: "support-pm-overview"
            },
            {
                text: "Switching between Modes",
                ref: "support-pm-modes"
            }
        ]
    }
];

const App = React.createClass({
    getInitialState () {
        return {
        };
    },

    componentDidMount: function() {
        jQuery(React.findDOMNode(this.refs.treeview)).treeview({
            data: tree,
            levels: 2, 
            // enableLinks: true, 
            onNodeSelected: function(event, data){
                // Your logic goes here
                jQuery("html,body").animate({
                    scrollTop: jQuery(React.findDOMNode(this.refs[data.ref])).offset().top - 101
                }, 1000);
                console.log("tt");
            }.bind(this)
        });
    },

    _render3rdNodes (_tree) {
        return _tree.map( thirdLevelNode => 
            <li key={thirdLevelNode.ref}>
                <h3 ref={thirdLevelNode.ref}>{thirdLevelNode.text}</h3>
                {thirdLevelNode.content}
            </li>
        );
    },

    _render2ndNodes (_tree) {
        return _tree.map( secondLevelNode => 
            <li key={secondLevelNode.ref}>
                <h2 ref={secondLevelNode.ref}>{secondLevelNode.text}</h2>
                {secondLevelNode.content}
                <ul>
                    {secondLevelNode.nodes?this._render3rdNodes(secondLevelNode.nodes):null}
                </ul>
            </li>
        );
    },

    _renderContent () {
        return tree.map( firstLevelNode => 
            <li key={firstLevelNode.ref}>
                <h1 ref={firstLevelNode.ref}>{firstLevelNode.text}</h1>
                {firstLevelNode.content}
                <ol>
                    {firstLevelNode.nodes?this._render2ndNodes(firstLevelNode.nodes):null}
                </ol>
            </li>
        );

    },

    render() {
        return (
            <div className="row">
                <div className="col-xs-4">
                    <div ref="treeview" style={{width: "360px"}}/>
                </div>
                <div className="col-xs-8">
                    <ul>
                        {this._renderContent()}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = App;
