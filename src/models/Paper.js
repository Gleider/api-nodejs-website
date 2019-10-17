const { Model, DataTypes } = require('sequelize')

class Paper extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      attachment_slide: DataTypes.STRING,
      attachment_file: DataTypes.STRING,
      accepted: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
}

module.exports = Paper
