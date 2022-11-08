const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || 1234;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "food";
const DB_PORT = process.env.DB_PORT || 3306;

const API_KEY = "189095cb0d304bf9a33ba67fc796ea4d";
const PORT = process.env.PORT || 3000;

module.exports = {
    DB_USER, 
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT,
    API_KEY,
    PORT
}