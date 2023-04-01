const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

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

UserSchema.pre('save', function(next) {
    this.userName = this.gender.trim()
    this.firstName = this.gender.trim()
    this.lastName = this.gender.trim()

    next()
})

UserSchema.post('save', function(next) {
      this.gender = this.gender.toUpperCase()
})


module.exports = mongoose.model('User', UserSchema);