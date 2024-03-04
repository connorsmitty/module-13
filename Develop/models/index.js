// Import Sequelize
const Sequelize = require('sequelize');

// Import environment variables
require('dotenv').config();

// Initialize Sequelize with database connection details from environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost', // Assuming your MySQL database is running locally
  dialect: 'mysql', // Using MySQL dialect
});

// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations
Product.belongsTo(Category); // Products belong to a Category
Category.hasMany(Product); // Categories have many Products
Product.belongsToMany(Tag, { through: ProductTag }); // Products belong to many Tags (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag }); // Tags belong to many Products (through ProductTag)

// Export models
module.exports = {
  sequelize,
  Product,
  Category,
  Tag,
  ProductTag,
};
