import mongoose from 'mongoose';
import { Provider } from "@nestjs/common";
// import { User } from "../models/User";
// import { Providers } from "../../constants";

// const sequelizeOptions: SequelizeOptions = {
//   host: process.env.DB_HOST || "mongodb://3.35.20.27:9080/dropcare-cnuh",
//   port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 3306,
  
//   database: process.env.DB || "mydb",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   define: {
//     freezeTableName: true,
//     underscored: true
//   }
// };
// mongoose.Promise = global.Promise;
export const databaseProviders: Provider[] = [
  {
    provide: "MONGO",
    useFactory: async () => {
      // (<any>mongoose).Promise = global.Promise;
      mongoose
        .connect("", { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
          console.log('Successfully connected to mongodb');
        })
        .catch((e: any) => {
          console.error(e);
        });
      }
  }
];