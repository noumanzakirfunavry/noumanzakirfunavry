import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";


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

@Column
tickerId: number

@Column
currencyId: number

@Column
orderNo: number

@Column({
    type : DataType.BOOLEAN
})
isVisible : boolean
}