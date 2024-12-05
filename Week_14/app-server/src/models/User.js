const mongoose = require('mongoose')

//this schema is where we tell mongoose about the different properties for our user collection to have to have
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

//We need to associate this schema with mongoose
mongoose.model('User', userSchema)