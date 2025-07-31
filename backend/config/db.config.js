require('dotenv').config();

// Export DB configuration
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    DIALECT: "postgres",
    PORT: process.env.DB_PORT
};