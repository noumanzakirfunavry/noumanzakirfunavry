import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany } from "sequelize-typescript";
import { Users } from "./users.entity";
import { UsersHasRights } from "./users.has.rights.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Rights extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@BelongsToMany(() => Users,() => UsersHasRights)
users : Users[]
}