const { timeStamp } = require('console');
const { create } = require('domain');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const user = new schema({
    title: {
        type: String
    },
    link: {
        type: String
    },


}, { timestamps: true })
module.exports = mongoose.model('user', user);