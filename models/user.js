const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define our model
const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String
})


//create the model class


//export the model