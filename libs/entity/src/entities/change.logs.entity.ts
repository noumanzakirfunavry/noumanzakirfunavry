import { ChangeTypes, EntityTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Sessions } from "./sessions.entity";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class ChangeLogs extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column({
    type : DataType.ENUM
})
changeType : ChangeTypes

@Column({
    type : DataType.ENUM
})
entityType : EntityTypes

@Column
entityId : number

@Column
changeDate : Date

@Column
changeComment : string

@Column
ipAddress : string

@Column
location : string

@ForeignKey(() => Sessions)
@Column
sessions_id : number

@BelongsTo(() => Sessions)
session : Sessions


@ForeignKey(() => Users)
@Column
changedBy : number

@BelongsTo(() => Users)
user : Users

}