const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise')

require('dotenv').config();

async function connectToDatabase() {
  try {
    const sequelize = new Sequelize(process.env.MYSQL_ADDON_URI);
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase
};
