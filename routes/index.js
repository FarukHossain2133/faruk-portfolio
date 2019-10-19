var express = require('express');
var router = express.Router();
const emailTemplate = require('../essential/email-template')
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Faruk Portfolio', msg: '' });
});

router.post('/', function(req, res, next) {
  const from = req.body.email;
  const name = req.body.name;
  const subject = req.body.subject;
  const text = req.body.message;


    const msg = {
    to: 'fa905432@gmail.com',
    from: from,
    subject: subject,
    text: text,
    // html: emailTemplate(name, text)
    html: `<div style="background-color: gray; padding: 5px; text-align: center;  margin: 0 auto; color: white; border-radius: 5px">
                <h1>Subject: ${text}</h1>         
                <p>Hello, I am <strong>${name}</strong></p>
                <p>From your portfolio website</p>
            </div>`
    };
    sgMail.send(msg);
    
});

module.exports = router;
