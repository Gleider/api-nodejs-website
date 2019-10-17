const { Model, DataTypes } = require('sequelize')

class ForgotPassword extends Model {
  static init (sequelize) {
    super.init({
      token: DataTypes.STRING,
      limit: DataTypes.DATE
    }, {
      sequelize
    })
  }
}

module.exports = ForgotPassword
