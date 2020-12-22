require("dotenv").config();

module.exports = {
  type: "postgres",
  host: "localhost",
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["dist/entities/*.js"],
  migrations: ["dist/migrations/*.js"],
};
