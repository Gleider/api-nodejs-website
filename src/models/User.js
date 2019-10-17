const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User
