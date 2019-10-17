const { Model, DataTypes } = require('sequelize')

class Course extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      initial_date: DataTypes.DATE,
      final_date: DataTypes.DATE,
      initial_submit_paper: DataTypes.DATE,
      final_submit_paper: DataTypes.DATE,
      hours: DataTypes.DATE
    }, {
      sequelize
    })
  }
}

module.exports = Course
