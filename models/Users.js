const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
        name: String,
        email: String,
        role: String,
        password: String
}, {timestamps: true});


userSchema.methods.hashPassword =  function(password){
     return bcrypt.hashSync(password, 10);
};

userSchema.methods.validPassword = function(password){
    const user = this;
     return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('users', userSchema)