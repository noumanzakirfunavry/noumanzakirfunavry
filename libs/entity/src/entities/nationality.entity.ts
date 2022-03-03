import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany } from "sequelize-typescript";
import { JobApplicants } from "./job.applicants.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Nationality extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id: number

@Column
title : string

@HasMany(() => JobApplicants)
jobApplicants : JobApplicants[]

}