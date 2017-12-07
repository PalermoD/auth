const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const postSchema = new Schema({
    title: String,
    video: String,
    discription: String
})

//create the model class
const ModelClass = mongoose.model('post', postSchema);

//export the model
module.exports = ModelClass;
