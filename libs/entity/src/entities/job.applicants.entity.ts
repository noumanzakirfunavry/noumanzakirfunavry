import { VisaStatusTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { JobApplicantsHasLanguages } from "./job.applicants.has.languages.entity";
import { Jobs } from "./jobs.entity";
import { Languages } from "./languages.entity";
import { Nationality } from "./nationality.entity";
import { Qualification } from "./qualification.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class JobApplicants extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    applicantName : string

    @Column
    applicantAge : number

    @Column
    applicantEmail : number

    @Column
    workExperience : number

    @Column({
        type : DataType.ENUM
    })
    visaStatus : VisaStatusTypes

    @Column({
        type : DataType.BOOLEAN
    })
    forFutureVacancy : boolean

    @Column
    dob : Date

    @ForeignKey(() => Qualification)
    @Column
    qualificationId : number
    @BelongsTo(() => Qualification)
    qualification : Qualification

    @ForeignKey(() => Nationality)
    @Column
    nationalityId : number
    @BelongsTo(() => Nationality)
    nationality : Nationality

    @ForeignKey(() => Jobs)
    @Column
    jobsId : number
    @BelongsTo(() => Jobs)
    jobs : Jobs

    @ForeignKey(() => Attachments)
    @Column
    cvId : number
    @BelongsTo(() =>Attachments)
    attachments : Attachments

    @BelongsToMany(() => Languages, () => JobApplicantsHasLanguages)
    language : Languages[]
}