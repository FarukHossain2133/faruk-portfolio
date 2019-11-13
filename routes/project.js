var express = require('express');
var router = express.Router();
const Projects = require('../models/Projects');
const Upload = require('../essential/uploadFile')('picture');
const auth = require('../middleware/auth');




/* GET home page. */
router.get('/', auth,  async function(req, res, next) {
    const projects = await Projects.find({}).sort({createdAt: -1});
    if(!projects) throw new Error()

    res.render('projects', {
        msg: '', 
        title: 'Projects',
        projects: projects,
    })
});


router.post('/',auth,  function(req, res, next) {
    Upload(req, res, (err) => {
        if (err){ 
            res.render('projects', { msg: err, projects: '', title: 'Projects'})
        }else{

            // If file is not selected
            if (req.file == undefined) {
                res.render('projects', { msg: 'No file selected!' , projects: '', title: 'Projects'})
            
        }else{
            const title = req.body.title;
            const heroku = req.body.heroku;
            const github = req.body.github;
            const languages = req.body.languages;
            const picture = req.file.filename;
            const author = req.user._id;
        
            const project = new Projects({
                title,
                heroku,
                github,
                languages,
                picture,
                author
            });
            
          
            project.save((err, data) => {
                if(err) {
                    req.flash('failure', 'Something went wrong');
                    res.render('projects',{
                    msg: req.flash('failure'), 
                    projects: '',
                    title: 'Projects',
                    })
                }else {
                    req.flash('success', 'Your Project has successfully saved');         
                    res.render('projects', {
                        msg: req.flash('success'), 
                        projects: '',
                        title: 'Projects',
                    })
                }
            })
            }
        }       
    }) 
  });


module.exports = router;
