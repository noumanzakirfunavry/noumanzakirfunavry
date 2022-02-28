import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class NewsAlert extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
description : string

@Column
url : string

@ForeignKey(() => Users)
@Column
addedBy : number
@BelongsTo(() => Users)
user : Users
}