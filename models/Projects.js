const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
   title: {type: String, required: true},
   heroku: {type: String, required: true},
   github: {type: String, required: true},
   languages: {type: String, required: true},
   picture: {type: String, required: true},
  author: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'users',
     required: true
  }

}, {timestamps: true});

module.exports = mongoose.model('projects', projectsSchema);