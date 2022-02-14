import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType } from "sequelize-typescript";


@Table({
    paranoid : true,
    timestamps : true
})
export class EmailSubscribers extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
name : string

@Column
email : string

@Column
phone : string

@Column
jobPosition : string

@Column
industry : string

@Column
DOB : Date

@Column
country : string

@Column
gender : string

@Column({
    type : DataType.BOOLEAN
})
status : boolean
}