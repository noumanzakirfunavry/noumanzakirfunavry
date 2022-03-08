import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class TrendingNowNews extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
position : number

@ForeignKey(() => Users)
@Column
addedBy : number
@BelongsTo(() => Users)
user : Users

@ForeignKey(() => News)
@Column
newsId : number
@BelongsTo(() => News)
news : News[]

}