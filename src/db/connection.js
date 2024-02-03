import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.NAME_DB;
const username = process.env.USER_DB;
const password = process.env.PASSWORD_DB;

const db = new Sequelize(database, username, password, {
  dialect: "mysql",
  host: process.env.HOST_DB,
  port: +process.env.PORT_DB,
  logging: false,
});

export default db;
