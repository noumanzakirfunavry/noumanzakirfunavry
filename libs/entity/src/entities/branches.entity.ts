import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Jobs } from "./jobs.entity";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class Branches extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@Column
phone : string

@Column
email : string

@Column
zipCode : string

@Column
addressLine1 : string

@Column
addressLine2 : string

@Column({
    type : DataType.BOOLEAN
})
isActive : boolean

@ForeignKey(() => Users)
@Column
published_by : number

@BelongsTo(() => Users)
user : Users

@HasMany(() => Jobs)
jobs : Jobs[]
}