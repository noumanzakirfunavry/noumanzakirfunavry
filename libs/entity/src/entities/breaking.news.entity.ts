import { Table,Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class BreakingNews extends Model{

    @Column
    newsLink : string

    @Column
    title : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Users)
    @Column
    addedBy : number
    @BelongsTo(() => Users)
    user : Users

    @ForeignKey(() => News)
    @Column
    newsId : number
    @BelongsTo(() => News)
    news : News

}
