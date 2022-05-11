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

@Column
changeType : string

@Column
entityType : string

@Column
changes : string

@Column
ipAddress : string

@ForeignKey(() => Sessions)
@Column
sessionId : number
@BelongsTo(() => Sessions)
session : Sessions

@ForeignKey(() => Users)
@Column
changedBy : number
@BelongsTo(() => Users)
user : Users

}