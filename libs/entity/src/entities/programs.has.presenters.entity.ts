import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Presenters } from "./presenters.entity";
import { Programs } from "./programs.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class ProgramsHasPresenters extends Model{
@ForeignKey(() => Programs)
@Column
programId : number

@ForeignKey(() => Presenters)
@Column
presenterId : number
}