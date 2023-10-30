// config/database.js
import {Sequelize} from "sequelize"
import dotenv from "dotenv";
dotenv.config();


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

export default sequelize
