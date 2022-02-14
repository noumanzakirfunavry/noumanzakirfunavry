import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class ContentAnalytics extends Model{
@PrimaryKey
@AutoIncrement
@Unique
id : number

@Column
date : Date

@Column
totalVisitors : number

@ForeignKey(() => News)
@Column
newsId : number

@BelongsTo(() => News)
news : News

}