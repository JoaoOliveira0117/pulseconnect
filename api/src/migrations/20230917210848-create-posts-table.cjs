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
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      comments: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      reposts: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }).then(()=>{
      return queryInterface.addColumn('posts','userId', {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      })
    })
      .then(()=>{
        return queryInterface.addColumn('posts', 'reply_to_post_id', {
          type: Sequelize.UUID,
          references: {
            model: 'posts',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      })
  },

  async down (queryInterface) {
    return await queryInterface.dropTable('posts')
  }
}
