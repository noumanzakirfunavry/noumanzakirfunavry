import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class TrendingNews extends Model{

@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
position : number

@Column
externalUrl : string

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