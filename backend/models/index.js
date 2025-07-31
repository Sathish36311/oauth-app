const { Sequelize } = require('sequelize')
const dbConfig  = require('../config/db.config')

// Create Sequelize instance with Postgres config
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT,
        logging: false      // Disable raw SQL logging (optional)
    }
);


sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully.'))
    .catch(() => console.error('❌ Database connection failed:', err))


// Initialize DB object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and attach models (we’ll create user.model.js next)
db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db;