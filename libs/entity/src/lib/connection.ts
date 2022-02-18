import { Sequelize } from "sequelize-typescript";
import { Entities } from "..";

export const Connection = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'mysql',
            host: "localhost",
            port: 3306,
            username: 'root',
            repositoryMode : true,
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
          await sequelize.sync({ 
           });
          return sequelize;
        },
      },
]

