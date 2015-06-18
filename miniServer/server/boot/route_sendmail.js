var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "king_chen@earlyplan.com",
        pass: "S1225+k0719"
    }
});

module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.post('/contactUs', function(req, res) {
        var fields = [
        "issueType",  
        "issueSubType",  
        "firstName",  
        "lastName",   
        "email",   
        "phone",   
        "subject",   
        "description",  
        "shippingCountry",   
        "orderNumber"
        ];

        function _getField( key ) {
            var value = (req.query && req.query[key]) || (req.body && req.body[key]) || "";
            return value.trim();
        }

        console.log(JSON.stringify(req.query));
        var firstName = _getField("firstName"); 
        var lastName = _getField("lastName"); 
        var email = _getField("email"); 
        var subject = _getField("subject"); 

        if(!firstName || !lastName || !email || !subject ){
            return res.status(400).json({
                err: "missing some query terms"
            });
        }

        var html = "" + 
            "<b>Issue Type</b>: " + _getField("issueType") + " <br/>" + 
            "<b>Issue SubType</b>: " + _getField("issueSubType") + " <br/>" + 
            "<b>Name</b>: " + firstName + " " + lastName + " <br/>" + 
            "<b>Phone</b>: " + _getField("phone") + " <br/>" + 
            "<b>Subject</b>: " + subject + " <br/>" + 
            "<b>Description</b>: " + _getField("description") + " <br/>" + 
            "<b>Shipping Country</b>: " + _getField("shippingCountry") + " <br/>" + 
            "<b>Order Number</b>: " + _getField("orderNumber") + " <br/>" ; 

        var text = "" +
            "Issue Type: " + _getField("issueType") + "\n" + 
            "Issue SubType: " + _getField("issueSubType") + "\n" + 
            "Name: " + firstName + "" + lastName + "\n" + 
            "Phone: " + _getField("phone") + "\n" + 
            "Subject: " + subject + "\n" + 
            "Description: " + _getField("description") + "\n" + 
            "Shipping Country: " + _getField("shippingCountry") + "\n" + 
            "Order Number: " + _getField("orderNumber") + "\n" ; 

        var mailOptions = {
            from: firstName + " " + lastName + " <" + email + ">", // sender address
            sender: firstName + " " + lastName + ' <' + email + ">", // sender address
            to: "service@myflyfit.com",
            subject: "[FLYFIT CONTACTUS] " + subject, // Subject line
            replyTo: email, 
            headers:  {
                "Return-Path": "<"+email+">", 
                "From": firstName + " " + lastName + ' <' + email + ">", // sender address
            },
            text: text,
            html: html
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log("mailsend err: " + error);
                res.status(500).json({message: "error"});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({success: info.response});
            }
        }); 
    });
}