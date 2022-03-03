import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany, ForeignKey, BelongsTo, BelongsToMany, DataType } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";
import { Branches } from "./branches.entity";
import { Departments } from "./departments.entity";
import { JobApplicants } from "./job.applicants.entity";
import { JobsHasDepartments } from "./jobs.has.departments.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Jobs extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @Column 
    totalOpenings : number

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @Column
    closingDate : Date

    @Column
    description : string

    @ForeignKey(() => Branches)
    @Column
    branchId : number
    @BelongsTo(() => Branches)
    branch : Branches

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users


    @HasMany(() => JobApplicants)
    jobApplicants : JobApplicants[]

    @BelongsToMany(() => Departments,() => JobsHasDepartments)
    departments : Departments[]

}