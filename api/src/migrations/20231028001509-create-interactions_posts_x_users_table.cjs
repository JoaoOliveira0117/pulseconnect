'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('interactions_posts_x_users', {
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
          allowNull: false
        },
        primaryKey: true,
        onDelete: 'CASCADE'
      },
      postId: {
        type: Sequelize.UUID,
        references: {
          model: 'posts',
          key: 'id',
          allowNull: false
        },
        primaryKey: true,
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.ENUM('like', 'repost'),
        allowNull: false,
        primaryKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('interactions_posts_x_users')
  }
}
