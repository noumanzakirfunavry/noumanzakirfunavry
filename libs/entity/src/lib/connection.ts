import { Sequelize } from "sequelize-typescript";
require('dotenv').config({ path: 'W:/Projects/CNBC-Monorepo/.env'})
import { Entities } from "..";
export const Connection = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username:process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        dialect: process.env.DATABASE_TYPE as 'postgres' | 'mysql',
        logging: true,
        models: Entities,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });


      await sequelize.sync({
      });
      return sequelize;
    },
  },
]

