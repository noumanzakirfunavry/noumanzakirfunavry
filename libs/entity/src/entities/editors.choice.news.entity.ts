import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class EditorsChoiceNews extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
position : number

@ForeignKey(() => News)
@Column
newsId : number

@BelongsTo(() => News)
news : News

@ForeignKey(() => Users)
@Column
userId : number

@BelongsTo(() => Users)
user : Users
}