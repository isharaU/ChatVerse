const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    pic: {type: String, default: 'https://drive.google.com/file/d/1ffhC8vTY9eq8PYoajPz6g8MgHh-m5DKF/view?usp=sharing'}
},
{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;