const { Model, DataTypes } = require('sequelize')

class Certificate extends Model {
  static init (sequelize) {
    super.init({
    }, {
      sequelize
    })
  }
}

module.exports = Certificate
