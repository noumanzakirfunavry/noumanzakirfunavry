import { SectionTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class FeaturedNews extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
position : number

@Column({
    type : DataType.ENUM
})
section : SectionTypes

@ForeignKey(() => News)
@Column
newsId : number
@BelongsTo(() => News)
news : News

@ForeignKey(() => Users)
@Column
addedBy : number
@BelongsTo(() => Users)
user : Users
}