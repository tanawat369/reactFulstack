const express = require('express');
const app = express();
const userRoute = require('./router/login')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
mongoose.connect('mongodb+srv://klo123645:'+ process.env.MONGO_ATLAS_PW +'@cluster0.9djy9xz.mongodb.net/userDB?retryWrites=true&w=majority')

app.use(userRoute)
 
module.exports = app