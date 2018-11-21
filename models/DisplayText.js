const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisplaySchema = new Schema({
    title: {
        type: String,
        default: 'À Propos'
    },
    subtitle: {
        type: String,
        default: 'À Propos'
    },
    desc: {
        type: String
    },
    imgUrl: {
        type: String
    },
    footer: {
        type: String,
        default: 'À Propos'
    },
    subfooter: {
        type: String,
        default: 'À Propos'
    },
    manageBy: {
        type: String,
    },
    status: {
        type: String,
        default: 'public'
    },
    user: {
        type: String,
        default: 'admin'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Display = mongoose.model('display', DisplaySchema, 'displays');
module.exports = Display;