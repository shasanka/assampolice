const mongoose = require('mongoose');

let EntrySchema = new mongoose.Schema({
    name: String,
    phone_no: String,
    email: String,
    gender: String,
    age: Number,
    address: String,
    school: String,
    class: String,
    type: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('entry', EntrySchema);
