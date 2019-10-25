const express = require('express')
const { config } = require('dotenv')
const path = require('path')

require('./database/index')

const app = express()
const env = process.env.NODE_ENV || 'dev'

const configPath = path.join(__dirname, './config', `.env.${env}`)
config({
  path: configPath
})
app.use(express.json())
app.use('/users', require('./routes/users'))

app.listen(3000, () => {
  console.log('Running on port 3000')
})
