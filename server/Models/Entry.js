const mongoose = require('mongoose');

let EntrySchema = new mongoose.Schema({
    name: String,
    phone_no: String,
    email: String,
    school: String,
    class: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('entry', EntrySchema);
