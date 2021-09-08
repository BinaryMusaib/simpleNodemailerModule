//You need to install nodemailer module => npm install nodemailer;
//Disable less secure app access, Gmail -> Settings -> Security -> Less secure app acess(Disable)
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    // You can add different services like hotmail, rediff, yahoo etc.
    service: 'gmail', 	

    auth: {
        user: 'Your Email goes here e.g hello@gmail.com',
        pass: 'Passcode goes here'
    }
});

var mailOptions = {
    from: 'Senders Email',
    //Here you can add as many recipients you want.
    to: 'Receivers Email, Receivers Email, Receivers Email',
    subject: 'Sending an email using Node.js',
    text: 'Hello, I am sending this mail from my local server'

};

transporter.sendMail(mailOptions, function(error, info) {
    if (error)
        console.log('This is an' + error);
    else
        console.log('Email sent' + info.response);
});