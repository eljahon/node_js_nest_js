import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UsersController } from "./users.controller";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string,
  password: string
}
@Table({tableName: 'users'})
export class User extends Model <User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ApiProperty({example: 'test@gmail.com', description: 'requiry to test@gmail.com'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;
  @Column({type: DataType.STRING, allowNull: false})
  @ApiProperty({example: '123456789', description: 'string length min:3 and max 12'})
  password: string;
  @ApiProperty({example: 'true', description: 'send true or false'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;
  @ApiProperty({example: 'test', description: 'requery to true or not true'})
  @Column({type: DataType.STRING, defaultValue: 'No-data'})
  banReason: string
}