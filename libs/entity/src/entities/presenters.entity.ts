import { GenderTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { Programs } from "./programs.entity";
import { ProgramsHasPresenters } from "./programs.has.presenters.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Presenters extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
name : string

@Column
age : number

@Column({
    type : DataType.ENUM
})
gender :  GenderTypes

@Column
dob : Date

@Column
joinedNetworkOn : Date

@Column
twitterLink : string

@Column
facebookLink : string

@Column
instagramLink : string

@Column
linkedInLink : string

@Column
jobPosition : string

@Column({
    type : DataType.BOOLEAN
})
isActive : boolean

@ForeignKey(() => Users)
@Column
publishedBy : number
@BelongsTo(() => Users)
user : Users

@ForeignKey(() => Attachments)
@Column
attachmentsId : number
@BelongsTo(() => Attachments)
attachments : Attachments

@BelongsToMany(() => Programs,() => ProgramsHasPresenters)
programs : Programs[]

}