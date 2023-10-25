// config/database.js
import {Sequelize} from "sequelize"
import dotenv from "dotenv";
dotenv.config();


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Rahman',
  database: 'notify'
});

export default sequelize
