const mongoose = require('mongoose')

const Schema = mongoose.Schema

const youtubeLinkSchema = new Schema({
    youtubeUrl: String,
})

module.exports = mongoose.model('youtubeModel', youtubeLinkSchema,'youtubeLink')