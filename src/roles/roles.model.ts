import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  value: string,
  description: string
}
@Table({tableName: 'roles'})
export class Role extends Model <Role, RoleCreationAttrs> {
  @ApiProperty({example: '1', description: 'unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ApiProperty({example: 'ADMIN', description: 'user role'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;
  @Column({type: DataType.STRING, allowNull: false})
  @ApiProperty({example: 'Admin user role', description: 'description role'})
  description: string;
  @BelongsToMany(()=> User, () => UserRoles)
  users: User[];
}