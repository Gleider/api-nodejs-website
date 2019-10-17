const User = require('../models/User')

module.exports = {

  async show (req, res) {

  },

  async store (req, res) {
    const { name, email, password, phone, image } = req.body
    // res.json({ name: name, email: email, password: password, phone: phone, image: image })
    const user = await User.create({ name, email, password, phone, image })
    return res.json(user)
  },

  async update (req, res) {

  },

  async destroy (req, res) {
    User.destroy({
      where: {

      }
    })
  }
}
