const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

// const db = 'mongodb://localhost/movieapp'  local database
const db = 'mongodb+srv://bouthayna123:bouthayna123@movieapp-9xrqn.mongodb.net/test?retryWrites=true&w=majority' // Cloud Database

// Database Connection
mongoose.connect(db,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Connected To Database'))
    .catch((err) => console.log(err))

// middleware
app.use(bodyParser.json()) // to parse the request body
app.use('/api', require('./routes/movies'))




// Server listening
app.listen(8080, (err) => {
    if (err) console.log('server err')
    else console.log('server is runnig on port 8080')
})