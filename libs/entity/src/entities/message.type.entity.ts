import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany } from "sequelize-typescript";
import { Message } from "./message.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class MessageType extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@Column
email : string

@HasMany(() => Message)
message : Message[]
}