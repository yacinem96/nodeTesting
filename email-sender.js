const nodemailer = require('nodemailer');

//5eme tache
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myemail@gmail.com',
      pass: '********'
    }
  });

  var mailOptions = {
    from: 'myemail@gmail.com',
    to: 'ayoub@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  