const dotenv = require("dotenv");
dotenv.config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
module.exports = {
  HOST: dbHost, // dirección de servidor MYSQL
  USER: dbUser,
  PASSWORD: dbPassword,
  DB: "IOT",
};
