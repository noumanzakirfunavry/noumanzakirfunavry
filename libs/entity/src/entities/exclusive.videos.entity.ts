import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { News } from "./news.entity";

@Table({
    timestamps : true
})
export class ExclusiveVideos extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @Column
    description : string

    @Column
    position : number

    @ForeignKey(() => News)
    @Column
    newsId : number
    @BelongsTo(() => News)
    news : News
}