require('./models/User')
//import express
const express = require('express')
//import mongoose to communicate to mongoDB
const mongoose = require('mongoose')
//import bodyparser
const bodyParser = require('body-parser')
//import authroutes
const authRoutes = require('./routes/authRoutes')

//our one time available uri, put in .env for safekeeping, DONT publish to github
const mongoUri = 'COPY_PASTE_FROM_ENV'

//connect to our DB via mongoose
mongoose.connect(mongoUri)

mongoose.connection.on('connected', ()=>{
    console.log('Successfully connected')
})

mongoose.connection.on('error', (err)=>{
    console.error('Not connected')
})

//create an app object, this is our application
const app = express()

//enable the ability to parse JSOn from the body of req/res
app.use(bodyParser.json())

//use the router - this needs to go after we create our app object
app.use(authRoutes)

// our first route handler, any time a user makes a request to '/'
//run the function (second argument)
//req = request, res = result/response
app.get('/', (req, res) => {
// for now send back a plain text message
    res.send('Hello')
})

//have our app listen on a specific port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})