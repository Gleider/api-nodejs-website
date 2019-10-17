const express = require('express')

require('./database/index')

const app = express()
app.use(express.json())
app.use('/users', require('./routes/users'))

app.listen(3000)
