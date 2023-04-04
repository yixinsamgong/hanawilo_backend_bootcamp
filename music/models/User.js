const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    userName:{
        type: String,
        unique: true,
        required: true,
        maxLength: 10
    },
    gender:{
        type: String,
        unique: true,
        Enum: [
            'Male', 
            'Female'
        ]
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: (email) => validator.isEmail(email)
    },
    password: {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 10
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 10
    }
},{
    timestamps: true
})

UserSchema.method.getSignedJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    });
}


module.exports = mongoose.model('User', UserSchema);