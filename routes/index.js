var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
const Projects = require('../models/Projects');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


/* GET home page. */
router.get('/', async function(req, res, next) {
  const projects = await Projects.find({}).sort({createdAt: -1});
  if(!projects) throw new Error()
  res.render('index', { title: 'Faruk Portfolio', msg: '' , projects: projects});
});

router.post('/', async function(req, res, next) {
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

    const projects = await Projects.find({});
    if(!projects) throw new Error()
    
  res.render('index', { title: 'Faruk Portfolio', msg: 'Your email successfully send', projects: projects});
});

module.exports = router;
