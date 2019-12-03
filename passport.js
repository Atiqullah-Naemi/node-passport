const express = require('express')
const bodyParser = require('body-parser')
const connectdb = require('./config/connection')
const routes = require('./routes/posts')

const app = express()

connectdb()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use('/api', routes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`app is running on port ${port}`))
