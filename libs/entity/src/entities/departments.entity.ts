import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany, BelongsToMany} from "sequelize-typescript";
import { Jobs } from "./jobs.entity";
import { JobsHasDepartments } from "./jobs.has.departments.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class Departments extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
name : string

@BelongsToMany(() => Jobs,() => JobsHasDepartments)
jobs : Jobs[]
}