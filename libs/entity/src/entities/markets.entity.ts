import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType } from "sequelize-typescript";


@Table({
    paranoid : true,
    timestamps : true
})
export class Markets extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@Column
description : string

@Column
symbol : string

@Column({
    type : DataType.BOOLEAN
})
isVisible : boolean
}