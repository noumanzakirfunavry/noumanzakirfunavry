import { Table,Model, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class NewsVisitors extends Model{

    @Column
    ipAddress : string
    
    @Column
    visitDate : Date

    @Column
    count  : number

    @ForeignKey(() => News)
    @Column
    newsId : number
    @BelongsTo(() => News)
    news : News
}