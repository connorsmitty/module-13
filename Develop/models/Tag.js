// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for Tag model
Tag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
