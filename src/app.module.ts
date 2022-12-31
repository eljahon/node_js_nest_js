import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { User } from "./users/users.model";

@Module ({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRESR_HOST,
      port: Number(process.env.POSTGRESR_PORT),
      username: process.env.POSTGRESR_USER,
      password: process.env.POSTGRESR_PASSWORD,
      database: process.env.POSTGRESR_DB,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ]
})
export class AppModule {

}

