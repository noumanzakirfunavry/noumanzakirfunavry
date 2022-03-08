import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany } from "sequelize-typescript";
import { JobApplicants } from "./job.applicants.entity";
import { JobApplicantsHasLanguages } from "./job.applicants.has.languages.entity";



@Table({
    paranoid : true,
    timestamps : true
})
export class Languages extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
description : string

@BelongsToMany(() => JobApplicants, () => JobApplicantsHasLanguages)
jobApplicant : JobApplicants[]
}