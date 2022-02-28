import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Programs } from "./programs.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class ProgramsSchedule extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
date : Date

@Column
startTime : Date

@Column
endTime : Date

@Column
repeatOn : Date 

@Column
programName : string

@ForeignKey(() => Programs)
@Column
programId : number
@BelongsTo(() => Programs)
program : Programs
}