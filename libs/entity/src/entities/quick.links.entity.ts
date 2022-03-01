import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class QuickLinks extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@Column
url : string

@Column
position : number

@Column({
    type : DataType.BOOLEAN
})
visible : boolean

@ForeignKey(() => Users)
@Column
addedBy : number
@BelongsTo(() => Users)
user : Users
}