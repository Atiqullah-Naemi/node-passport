const express = require('express')
const bodyParser = require('body-parser')
const connectdb = require('./config/connection')
const routes = require('./routes/posts')

const app = express()

connectdb()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', routes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app is running on port ${port}`))
