const { Model, DataTypes } = require('sequelize')

class Course extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      level: DataTypes.STRING,
      modality: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Course
