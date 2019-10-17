const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/UserController')

routes.post('/', UserController.store)
routes.delete('/', UserController.destroy)

module.exports = routes
