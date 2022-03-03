import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Departments } from "./departments.entity";
import { Jobs } from "./jobs.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class JobsHasDepartments extends Model{
@ForeignKey(() => Jobs)
@Column
jobsId : number

@ForeignKey(() => Departments)
@Column
departmentId : number
}