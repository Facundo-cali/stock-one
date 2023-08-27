const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password must be at least 6 characters long"],
        maxLength: [30, "Password must be at most 30 characters long"]
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number"],
        maxLength: [15, "Phone number must be 10 digits long"]
    }
}, {
    timestamps: true
});

//asi es como se va a exportar y como lo vamos a poder usar en las rutas y demas.
const User = mongoose.model('User', userSchema);

module.exports = User;