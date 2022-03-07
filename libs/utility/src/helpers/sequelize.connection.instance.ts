import {Entities} from '@cnbc-monorepo/entity'
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
    username: 'developer',
    password: 'Dev@321',
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