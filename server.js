const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const nodemailer = require('nodemailer')
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
}

// Catch all route to redirect unmanaged routes back to the react app.
// THIS OPTION IS NOT SEO OPTIMIZED
// THIS ROUTE SENDS ALL SAVED LINKS TO THE ROOT
app.get('/*', function (req, res) {
  res.redirect('/')
});

// CONNECTION NOT YET TESTED

// Nodemailer config to handle contact form submit.
let transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Post route for contact form submission
app.post('/send', (req, res, next) => {
  console.log(req.body)
  var { name, email, message } = req.body;
  let mailOptions = {
    from: `"${name}" <${email}>`, //'"Fred Foo 👻" <foo@example.com>', sender address
    to: `${process.env.EMAIL}`, // list of receivers
    subject: "Atlas Pet Contact Form",
    text: `${message}`, // plain text body
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('Error: ', err)
    } else {
      console.log('Email Sent')
    }
  });
  res.json('Email Sent');
});

app.listen(PORT, () => { console.log(`API Server now listening on PORT ${PORT}!`) })