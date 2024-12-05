const express = require('express')
//this is how we access the userschema/model here
const mongoose = require('mongoose')
const User = mongoose.model('User')

//create an router
const router = express.Router()

//create a simple route
router.post('/signup', async (req,res) => {
    //for now, send back a plain text message
    res.send('Sign Up with JSON')
    //this is after JSON parsing is enabled
    //console.log(req.headers)
    console.log(req.body)
    //destructure ffrom the request
    const {email,password} = req.body
    // use them to create a new user
    const user = new User({email, password})
    //write to our DB
    await user.save()
    //send a message if we get here
    res.send('User created')
})

//export it for use elsewhere
module.exports = router