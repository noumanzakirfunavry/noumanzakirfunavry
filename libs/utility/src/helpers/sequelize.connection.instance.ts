import {Entities} from '@cnbc-monorepo/entity'
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'cnbc',
    logging: true,
    models : Entities,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });