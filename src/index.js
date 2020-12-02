const express= require('express')
const path = require('path')
const env = require('node-env-file')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

env('./.env')

app.use(express.urlencoded({

    extended: true

}))

const routes = require('./router')

app.use('/', routes())

const port = process.env.PORT || 3000

app.listen(port)