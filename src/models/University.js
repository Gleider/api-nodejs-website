const { Model, DataTypes } = require('sequelize')

class University extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      initials: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = University
