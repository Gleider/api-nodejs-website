'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      initial_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      final_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      initial_submit_paper: {
        type: Sequelize.DATE,
        allowNull: false
      },
      final_submit_paper: {
        type: Sequelize.DATE,
        allowNull: false
      },
      hours: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events')
  }
}
