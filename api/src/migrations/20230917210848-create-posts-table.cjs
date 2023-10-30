'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      replyTo: {
        type: Sequelize.UUID,
        references: {
          model: 'posts',
          key: 'id',
          allowNull: true
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  async down (queryInterface) {
    return await queryInterface.dropTable('posts')
  }
}
