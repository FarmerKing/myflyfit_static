import React from "react";
import Underscore from "underscore";

import TreeViewContent from "./TreeViewContent.jsx";

require("../../assets/stylesheets/FaqApp.less");

var faq = [
    {
        text: "Service",
        ref: "faq-service",
        _nodes: [
            {
                text: "How can I tell if my FlyFit needs help?", 
                ref: "faq-service-1", 
                _content: "Visit our <a href='/support.html'>support</a> site for helpful information. If you have read the articles but still not sure whether your FlyFit needs help, please <a href='/contact-us.html'>contact us</a>."
            },
            {
                text: "How do I get my FlyFit serviced?", 
                ref: "faq-service-2",
                _content: "Please <a href='/contact-us.html'>contact us</a>, and we will reply to you via e­mail as soon as possible. Alternatively, online meeting could be arranged so that we could examine your FlyFit, but please make an appointment via email first."
            },
            {
                text: "How long does the maintenance take?", 
                ref: "faq-service-3",
                _content: "The time required for maintenance usually depends on the nature of the issue and the location you stay. We will notify you how long the maintenance and transportation time would be after we receive your FlyFit. <br/>Please visit the <a href='/return-policy.html'>return and refund site</a> for more information about sending your FlyFit to us."
            },
            {
                text: "Will my data be preserved during the maintenance?", 
                ref: "faq-service-4",
                content: "All of your data will be preserved online. Hence, you will not have to worry about losing your data during the maintenance."
            },
            {
                text: "Does the warranty apply to the software or application?",
                ref: "faq-service-5", 
                content: "This limited warranty applies only to the hardware components of the product as originally supplied and does not apply to any software or applications."
            }
        ]
    },
    {
        text: "Warranty", 
        ref: "faq-warranty",
        _nodes: [
            {
                text: "How long is the warranty?", 
                ref: "faq-warranty-1",
                content: "Our warranty covers your FlyFit for 6 months. Warranty service is available at no charge for 6 months from the date of the original delivery of the product."
            },
            {
                text: "How do I know if my FlyFit is still in warranty?", 
                ref: "faq-warranty-2",
                _content: "Basically, warranty covers your FlyFit for 6 months after delivery. If you are not sure whether your FlyFit is still under warranty, you could <a href='/contact-us.html'>contact us</a>.",
            },
            {
                text: "What type of damages are not covered by the warranty?", 
                ref: "faq-warranty-3",
                content: "FlyFit warranty covers for damages that result from accidents, liquid spill or submersion(to charger), disassembly, unauthorized service or unauthorized modification..",
            },
            {
                text: "Can I extend service coverage on my FlyFit beyond the warranty?", 
                ref: "faq-warranty-4",
                content: "Unfortunately, we do not have such option to extend the warranty. Customers are required to be responsible for the service fee if the warranty has expired. untrackable",
            },
            {
                text: "If the warranty of my FlyFit has expired, what can I do?", 
                ref: "faq-warranty-5",
                content: "If your warranty has expired, you still have access to all of the service options. However, the service fee will be your responsibility, including the shipping, labors, and parts fee,etc.",
            },
        ]
    },
    {
        text: "Shipping and delivery", 
        ref: "faq-shipping",
        _nodes: [
            {
                text: "Where is my package?", 
                ref: "faq-shipping-1",
                _content: `<p>Please <a href="/contact-us.html">contact us</a> and we will provide you with the tracking number of the package.</p>
                           <p>Note: <ul><li>Some shipments, such as standard international shipments, are untraceable.</li>
                           <li>nternational orders may be subject to customs clearance procedures that could￼lead to delays in delivery.</li></ul></p>`
            },
            {
                text: "What is the shipping rate and time?", 
                ref: "faq-shipping-2",
                content: "Shipping rates depend on the selected shipping speed and size of the item. Normally, you can receive your order within two weeks after the purchase. We guarantee you that you will receive the product no more than one month. Please contact us if you do not receive the product on time."
            },
        ]
    },
    {
        text: "Return and refund", 
        ref: "faq-return",
        _nodes: [
            {
                text: "How can I return the FlyFit?", 
                ref: "faq-return-1",
                _content: `According to our <a href="/return-policy.html">return and refund policy</a>, you can return your FlyFit within 15 days from the date you received the product. If 15 days have expired, we will not offer you a refund. For more information, please check the <a href="/return-policy.html">return and refund site</a>.`
            },
            {
                text: "Is it free to return?", 
                ref: "faq-return-2",
                _content: `You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable. We recommend you use a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.<br/>
                           For more information, please check the <a href="/return-policy.html">return and refund site</a>.`
            },
            {
                text: "When will I get my refund?", 
                ref: "faq-return-3",
                content: "Normally you can receive your refund in about 2­3 weeks. Most refunds are fully refunded in 3­5 days after we receive and process your return."
            },
            {
                text: "Can I refund after I return it?", 
                ref: "faq-return-4",
                _content: "Please check the <a href='/return-policy.html'>return and refund site</a>. If you still have questions, please inform us via email."
            },
        ]
    },
    {
        text: "Hardware", 
        ref: "faq-hardware", 
        _nodes: [
            {
                text: "How do I perform a hardware reset?",
                ref: "faq-hardware-1",
                content: "First, place the device inside the charger. Then, plug the charger into a USB port and make sure that it is able to charge. This step is needed to ensure the contacts are in place. Last, use a straightened paperclip and push it through the hole below the charger to reset the device."
            },
            {
                text: "Experiencing battery problems?",
                ref: "faq-hardware-2",
                content: "Please try performing a hardware reset on the device using a hard paper clip. If the problem remains, please contact us immediately."
            },
            {
                text: "How do I deal with the Chlorine buildup on the contacts?",
                ref: "faq-hardware-3",
                content: "Clean the device with clean water after each swim. This prevents the chlorine from building up on the contacts of the device, which results in battery issues."
            },
            {
                text: "How to start recording data?",
                ref: "faq-hardware-4",
                content: "The FlyFit device records data automatically after being worn on the ankle. Users can perform sync with their mobile device afterwards, and have the data in their FlyFit shown on the app."
            },
            {
                text: "What are the different modes for?",
                ref: "faq-hardware-5",
                _content: "The device has three primary modes: \
                           <dl class='dl-horizontal'> \
                             <dt>Daily Mode - </dt> <dd>which records daily activities such as cycling, steps and etc.</dd> \
                             <dt>Swim Mode - </dt> <dd>which records swim strokes.</dd> \
                             <dt>Sleep Mode - </dt> <dd>which records sleep.</dd> \
                           </dl>"
            },
            {
                text: "Does the light on FlyFit blink when it is on?",
                ref: "faq-hardware-6",
                content: "The light on FlyFit only blinks when the user presses the button. Otherwise, it blinks continuously when the device is connected with the mobile device when under real time mode."
            },
            {
                text: "How to perform sync?",
                ref: "faq-hardware-7",
                content: "To perform sync, users simply need to tap on the band icon on the top right corner of the FlyFit app. As the mobile device begins to search for a FlyFit, press the button on the FlyFit to wake the device. Sync will begin automatically after the two are connected."
            },
            {
                text: "If I go out and leave my phone behind, will the device track my activities?",
                ref: "faq-hardware-8",
                content: "FlyFit tracks your activities even when you do not have your mobile device around. Just remember to sync your FlyFit device with your app afterwards in order to view the recorded data."
            },
            {
                text: "Does the device have to be constantly connected to a mobile device?",
                ref: "faq-hardware-9",
                content: "FlyFit does not need to be constantly connected to a mobile device in order to record data. You will only have to sync your device with the app when you want to view the recorded data. A constant connection with a mobile device is only required when you want to view your real time data."
            },
            {
                text: "If I wear the FlyFit into the shower, do I need to worry about getting soap/shampoo/conditioner on it?",
                ref: "faq-hardware-10",
                content: "Although the device is waterproof, it is highly recommended that you do not to wear the device while you are taking a shower since the soap/shampoo might cause damage to the device. Therefore, please take the device off before taking a shower."
            },
            {
                text: "Will it feel awkward or uncomfortable wearing the FlyFit while sleeping?",
                ref: "faq-hardware-11",
                _content: "Wearing FlyFit while sleeping is a great way for you to understand your sleeping quality and quantity, giving you a better understanding of your sleeping patterns.<br/>\
                           If your concern is that it will be awkward or uncomfortable wearing it while sleeping,, you will not have to worry. A little loosening of the ankle band will greatly reduce the awkwardness users might experience."
            },
            {
                text: "The button on the bottom of the unit no longer functions",
                ref: "faq-hardware-12",
                content: "We would recommend you perform a hardware reset. If the button remains defective, please notify us immediately. We will arrange a Skype meeting to verify the defection and furthermore, process the return."
            },
        ]
    },
    {
        text: "App", 
        ref: "faq-app",
        _nodes: [
            {
                text: "What is real­time mode?", 
                ref: "faq-app-1",
                content: 'Real­time mode records data with precision as users may choose exactly which exercise type they are engaging beforehand, such as road cycling, treadmill and etc. This mode requires FlyFit to be constantly connected to a mobile device via bluetooth. Users can enter real time mode simply by tapping "START" on the menu bar.'
            },
            {
                text: "Which mobile devices are compatible with FlyFit?", 
                ref: "faq-app-2",
                content: "To connect with FlyFit, mobile devices are required to be equipped with with Bluetooth4.0/BLE. The iPhone4s and the later iPhone models are all compatible with FlyFit."
            },
            {
                text: "Where is the Android app?", 
                ref: "faq-app-3",
                content: "Though the Android app has not been released on Google Play yet, we have already sent users apk files to let them use it beforehand. If you have not received the file, please notify us immediately."
            },
            {
                text: "What is the ‘Route’ in the app for?", 
                ref: "faq-app-4",
                content: "Route records the exercise sessions users had under real time mode. Not only does it record the specific routes on Google Map, it provides statistics such as calories, distance and etc."
            },
        ]
    }
];



const App = React.createClass({

    getInitialState () {
        return {
            scrollToRef: "faq-service"
        };
    },

    componentDidMount: function() {
        jQuery(React.findDOMNode(this.refs.treeview)).treeview({
            data: faq,
            levels: 2, 
            // enableLinks: true, 
            onNodeSelected: function(event, data){
                // Your logic goes here
                this.setState({
                    scrollToRef: data.ref
                });
            }.bind(this)
        });
    },

    render() {
        var data = Underscore(faq).filter( node => node.ref == this.state.scrollToRef);
        return (
            <div id="faq-app" className="row">
                <div className="col-xs-4">
                    <div ref="treeview" style={{width: "360px", position: "fixed"}}/>
                </div>
                <div className="col-xs-8">
                    <TreeViewContent {...this.state} offsetTop={101} data={data}/>
                </div>
            </div>
        );
    }
});

export default App;
