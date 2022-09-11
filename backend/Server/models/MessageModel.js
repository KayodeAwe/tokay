const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    name: String,
    Contact: String,
    MessageS: String
})

module.exports = mongoose.model('myMessage', messageSchema,'GuestMessages')