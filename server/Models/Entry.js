const mongoose = require('mongoose');

let EntrySchema = new mongoose.Schema({
    uuid: String,
    name: String,
    phone_no: String,
    email: String,
    gender: String,
    age: Number,
    address: String,
    school: String,
    class: String,
    competition_type: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('entry', EntrySchema);
