const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/UserController')

routes.post('/', UserController.store)
routes.delete('/', UserController.destroy)
routes.get('/', (req, res) => {
  return res.status(200).json({
    ok: 'true'
  })
})

module.exports = routes
