const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: Number, required: true, unique: true },
    state: { type: String },
    district: { type: String },
    address: { type: String },
    pincode: { type: Number }
}, { timestamps: true })

var User = mongoose.model('User', UserSchema);
module.exports = User;