import React from "react";
import Underscore from "underscore";
import Classnames from "classnames";

import {Locations, Location, NavigatableMixin} from "react-router-component"; 
import {Input, Button} from "react-bootstrap";

require("../../assets/stylesheets/SupportApp.less");

var tree = [
    {
        text: "FlyFit App",
        ref: "support-flyfit",
        _href: "/support.html",
        state: {
            expanded: false,
        },
        content: "Follow these steps to start using FlyFit for the first time!",
        nodeOrder: true, // nodes are ordered list, default is unordered list
        nodes: [
            {
                text: "Getting Started (download)",
                ref: "support-flyfit-gs",
                _href: "/support.html",
                content: "",
                _nodes: [
                    {
                        text: "Download the FlyFIt App to your smartphone",
                        ref: "support-flyfit-gs-download",
                        _img : {
                            src: "/img/support/app/app_download.png",
                            maxWidth: 378
                        }
                    },
                    {
                        text: "Create your FlyFit account",
                        ref: "support-flyfit-gs-create",
                        content: "When you first open Flyfit app, you will be prompted to create a new account either by selecting “Login with Facebook” or “Sign up with Email”. Once creating an account, Flyfit will ask you for your nickname, gender, height and weight. By providing this information, Flyfit will be able to accurately track your calorie burn and other biometrics. Don’t worry, this information will always be kept private.",
                        _img: {
                            src: "/img/support/app/app_createaccount.png"
                        }
                    }
                ]
            },
            {
                text: "Pair Flyfit with the FlyFit App",
                ref: "support-flyfit-pair",
                _href: "/support.html",
                _nodes: [
                    {
                        text: "Bluetooth Setting", 
                        ref: "support-flyfit-pair-bt",
                        content: "Go into your mobile device’s Settings → Bluetooth → Swipe “On”",
                        _img : {
                            src: "/img/support/app/app_bluetooth.png",
                            maxWidth: 640
                        }
                    },
                    {
                        text: "Tap the Flyfit icon at the top­right corner to pair your flyfit",
                        ref: "support-flyfit-pair-tap",
                        _img : {
                            src: "/img/support/app/app_pairing.png",
                            maxWidth: 385
                        }
                    }
                ]
            },
            {
                text: "Sync",
                ref: "support-flyfit-sync",
                _href: "/support.html",
                _nodes: [
                    {
                        text: "After pairing, Flyfit will automatically sync data with your smartphone or pad each time tapping the Flyfit icon.",
                        ref: "support-flyfit-sync-n1"
                    },
                    {
                        text: "Multiple syncing within the same day is power consumptive.",
                        ref: "support-flyfit-sync-n2"
                    }
                ],
                _img: { 
                    src: `/img/support/app/app_sync.png`
                }
            },
            {
                text: "Battery Life",
                ref: "support-flyfit-battery",
                _href: "/support.html",
                _nodes: [ 
                    {
                        text: "You can check battery life in the Flyfit info section as long as device is connected.",
                        ref: "support-flyfit-battery-n1"
                    },
                    {
                        text: "Device will automatically switches to system sleep to consumpt power.",
                        ref: "support-flyfit-battery-n2"
                    }
                ],
                _img: { 
                    src: "/img/support/app/app_batery.png",
                    maxWidth: 370
                }
            },
            {
                text: "Home",
                _href: "/support.html",
                ref: "support-flyfit-home",
                _content: "<img className='img-responsive' src='/img/support/app/app_home.png'/>", 
                _nodes: [
                    {
                        text: "Start Workout", 
                        ref: "support-flyfit-home-start",
                        _nodes: [
                            {
                                text: "Press the START button!", 
                                ref: "support-flyfit-home-start-1",
                                _img: {
                                    src: "/img/support/app/app_workout_start.png",
                                    maxWidth: 390
                                }
                            },
                            {
                                text: "Choose the sport type",
                                ref: "support-flyfit-home-start-2",
                                _img: {
                                    src: "/img/support/app/app_workout_choose.png", 
                                    maxWidth: 390
                                }
                            },
                            {
                                text: "Set up your workout target",
                                ref: "support-flyfit-home-start-3",
                                _img: {
                                    src: "/img/support/app/app_workout_target.png",
                                    maxWidth: 390
                                }
                            },
                            {
                                text: "Stop your workout",
                                ref: "support-flyfit-home-start-4",
                                _content: `press the PAUSE button and the <span class="fa-stack fa-lg">
                                              <i class="fa fa-circle fa-stack-2x"></i>
                                              <i class="fa fa-stop fa-stack-1x" style="color: black;"></i>
                                           </span>to end it.`,
                                _img: {
                                    src: "/img/support/app/app_workout_stop.png"
                                }
                            }
                        ]
                    }
                ]

            },
            {
                text: "Wake Up Alarm & Sleep Reminder",
                ref: "support-flyfit-wake",
                _href: "/support.html",
                content: "You can set wake up alarm and reminder in Flyfit info section.",
                _img: {
                    src: "/img/support/app/app_wakeup.png",
                    maxWidth: 730
                }
            },
            {
                text: "Statistic",
                ref: "support-flyfit-st", 
                _href: "/support.html",
                _nodes: [
                    {
                        text: "Check out your daily/weekly/monthly statistic of your activity!", 
                        ref: "support-flyfit-st-n1",
                        _img: {
                            src: "/img/support/app/app_statistic.png",
                            maxWidth: 295
                        }
                    },
                    {
                        text: "Check out your daily/weekly/monthly statistic of your activity!", 
                        _text: `Change the order or statistic zone by pressing <span class="fa fa-cog"></span>, and long press on the <span class="fa fa-bars"></span> to change the order.`,
                        ref: "support-flyfit-st-n2",
                        _img: {
                            src: "/img/support/app/app_statistic_setting.png",
                            maxWidth: 650
                        }
                    }
                ]
            },
            {
                text: "Goal",
                ref: "support-flyfit-goal", 
                _href: "/support.html",
                _img: {
                    src: "/img/support/app/app_goal.png",
                    maxWidth: 500
                }
            },
        ]
    },
    {
        text: "Product Manuals",
        ref: "support-pm",
        _href: "/support_pm.html",
        nodeOrder: true,
        state: {
            expanded: false,
        },
        nodes: [
            {
                text: "Features",
                ref: "support-pm-feature",
                _href: "/support_pm.html",
                _img: {
                    src: "/img/support/manual/features.png"
                }
            },
            {
                text: "Basic",
                ref: "support-pm-basic",
                _href: "/support_pm.html",
                _nodes: [
                    {
                        text: "Charging",
                        ref: "support-pm-basic-charging",
                        content: "To ensure full battery during your first workout, remove your Flyfit device from the package and charge it using the included charging pad and cable. Connect the charging cable to the charging pad and insert the other end to a USB port on a computer or a standard USB wall adapter. Make sure the logos on the charger and the tracker should be on the same side.",
                        _img: {
                            src: "/img/support/manual/basic_charging.png",
                        }
                    },
                    {
                        text: "Installing", 
                        ref: "support-pm-basic-install",
                        content: "Install the tracker into the ankle band with the same side of logo.",
                        _img: {
                            src: "/img/support/manual/basic_install.png",
                            maxWidth: 230
                        },
                    },
                    {
                        text: "Wake it up",
                        ref: "support-pm-basic-wake",
                        content: "Press the button at the bottom to wake up your Flyfit. You can keep pressing button to switch between different modes.",
                        _img: {
                            src: "/img/support/manual/basic_wake.png",
                            maxWidth: 265
                        }
                    },
                    {
                        text: "Wearing",
                        ref: "support-pm-basic-wearing",
                        _nodes: [
                            {
                                text: "Please wear the tracker on the outer side of your ankle.",
                                ref: "support-pm-basic-wearing-1"
 
                            },
                            {
                                text: "Do not wear it in the front and the back of your ankle.",
                                ref: "support-pm-basic-wearing-2"
                            }
                        ],
                        _img: {
                            src: "/img/support/manual/basic_wearing.png",
                            maxWidth: 580
                        }
                    }
                ]
            },
            {
                text: "Overview(Icons)",
                _href: "/support_pm.html",
                _content: `<ul class="pm-icon">
                               <li style="list-style-image: url('/img/support/manual/icon-daily.png');"><span><strong class="strong">Daily Mode</strong><span> - records daily activities including running, cycling and stairs.</span></span></li>
                               <li style="list-style-image: url('/img/support/manual/icon-swim.png');"><span><strong class="strong">Swim Mode</strong> - records swimming activities. </span></li>
                               <li style="list-style-image: url('/img/support/manual/icon-sleep.png');"><span><strong class="strong">Sleep Mode</strong> - records sleeping activities. </span></li>
                           </ul>`,
                ref: "support-pm-overview"
            },
            {
                text: "Switching between Modes",
                _href: "/support_pm.html",
                ref: "support-pm-modes", 
                _nodes: [
                    {
                        text: "Daily Mode", 
                        ref: "support-pm-modes-daily",
                        content: "Once your FlyFit is set to daily mode, you can start doing all sorts of different on-land activities. The motion sensor in the device will automatically determine your exercise type and record accordingly.",
                    },
                    {
                        text: "Real-time Mode", 
                        ref: "support-pm-modes-rt",
                        content: "If you wish to record a particular workout, run or bike ride, you can set your FlyFit to real-time mode. Turn on the bluetooth on your mobile device, then press ‘Start Workout’ in the app. Select your exercise type then press start. (You might have to press the button on your FlyFit to establish the connection)\n You will be able to see your workout statistics in real-time. After you are done, press stop. You can choose to save your workout by pressing ‘Save’. Your workouts will all be saved under ‘Routes’."
                    },
                    {
                        text: "Sleeping/Swimming Mode", 
                        ref: "support-pm-modes-ss",
                        content: "After recording activities under sleeping mode and swimming mode, remember to switch the device back to daily mode, or else your daily activities will be wrongly recorded as sleep or swimming strokes.",
                    },
                ]
            }
        ]
    }
];

function _renderNodeContent(node) {
    if(node._content){
        return (<div className="content" dangerouslySetInnerHTML={{__html: node._content}}/>);
    }else if(node.content){
        return <div className="content">{node.content}</div>;
    }else{
        return null;
    }
}

function _renderNodeImage(node) {
    if(node._img && node._img.src){
        return <img className="img-responsive" style={{maxWidth: node._img.maxWidth}} src={node._img.src}/>;
    }else{
        return null;
    }
}

function _renderNodeText(node) {
    if(node._text){
        return (<span dangerouslySetInnerHTML={{__html: node._text}}/>);
    }else if(node.text){
        return node.text;
    }else{
        return null;
    }
}

function _renderGeneralNodes (_tree) {
    return _tree.map( node => 
        <li key={node.ref}>
            <h3 ref={node.ref}>{_renderNodeText(node)}</h3>
            {_renderNodeContent(node)}
            <ul>
                {
                        node._nodes?
                        _renderGeneralNodes(node._nodes): null
                }
            </ul>
            {_renderNodeImage(node)}
        </li>
    );
};

function _render2ndNodes (_tree) {
    return _tree.map( secondLevelNode => 
        <li key={secondLevelNode.ref}>
            <h2 ref={secondLevelNode.ref}>{_renderNodeText(secondLevelNode)}</h2>
            {_renderNodeContent(secondLevelNode)}
            <ul>
                {
                    secondLevelNode.nodes?
                        _renderGeneralNodes(secondLevelNode.nodes): 
                        secondLevelNode._nodes?
                        _renderGeneralNodes(secondLevelNode._nodes): null
                }
            </ul>
            {_renderNodeImage(secondLevelNode)}
        </li>
    );
};

function _render1stNodes (_tree, path) {
    return Underscore.chain(_tree)
    .filter( firstLevelNode => ((path && path == firstLevelNode["_href"]) || (!path)) )
    .map( firstLevelNode => 
        <li key={firstLevelNode.ref}>
            <h1 ref={firstLevelNode.ref}>{_renderNodeText(firstLevelNode)}</h1>
            {_renderNodeContent(firstLevelNode)}
            <ol>
                {firstLevelNode.nodes?_render2ndNodes(firstLevelNode.nodes):null}
            </ol>
        </li>
    )
    .value();
};

const SupportManual = React.createClass({

    _scrollTo () {
        if( this.refs[this.props.scrollToRef] ){
            jQuery("html,body").animate({
                scrollTop: jQuery(React.findDOMNode(this.refs[this.props.scrollToRef])).offset().top - 101
            }, 1000);
        }
    },

    componentDidMount: function() {
        this._scrollTo()
    },

    componentDidUpdate: function(prevProps, prevState) {
        this._scrollTo();
    },

    render () {
        return (
            <ul>
                {_render1stNodes(tree, this.props.href)}
            </ul>
        );
    }
});

const App = React.createClass({
    mixins: [ NavigatableMixin ],

    getInitialState () {
        return {
        };
    },

    componentDidMount: function() {
        if(location.pathname == "/support.html"){
            tree[0].state.expanded = true;
        }else if(location.pathname == "/support_pm.html"){
            tree[1].state.expanded = true;
        }
        
        jQuery(React.findDOMNode(this.refs.treeview)).treeview({
            data: tree,
            levels: 2, 
            // enableLinks: true, 
            onNodeSelected: function(event, data){
                // Your logic goes here
                if( location.pathname != data._href){
                    this.navigate(data._href);
                }
                this.setState({
                    scrollToRef: data.ref
                });
            }.bind(this)
        });
    },

    onNavigation () {
        console.log(this.state.scrollToRef);
    },

    render() {
        return (
            <div id="support-app" className="row">
                <div className="col-xs-4">
                    <div ref="treeview" style={{width: "360px", position: "fixed"}}/>
                </div>
                <div className="col-xs-8">
                    <Locations contextual onNavigation={this.onNavigation}>
                        <Location path="/support.html" href="/support.html" handler={SupportManual} scrollToRef={this.state.scrollToRef}/>
                        <Location path="/support_pm.html" href="/support_pm.html" handler={SupportManual} scrollToRef={this.state.scrollToRef}/>
                    </Locations>
                </div>
            </div>
        );
    }
});

module.exports = App;
