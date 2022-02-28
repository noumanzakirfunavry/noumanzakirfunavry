import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { JobApplicants } from "./job.applicants.entity";
import { Languages } from "./languages.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class JobApplicantsHasLanguages extends Model{
@ForeignKey(() => JobApplicants)
@Column
jobApplicantId : number

@ForeignKey(() => Languages)
@Column
languageId : number
}