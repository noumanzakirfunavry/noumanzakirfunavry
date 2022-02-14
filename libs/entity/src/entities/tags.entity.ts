import { Table, Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { News } from "./news.entity";
import { NewsHasTags } from "./news.has.tags.entity";
import { Users } from "./users.entity";

@Table({
    paranoid: true,
    timestamps: true
})
export class Tags extends Model {
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number

    @Column
    title: string

    @Column({
        type: DataType.BOOLEAN
    })
    isActive: boolean

    @ForeignKey(() => Users)
    @Column
    publishedBy: number
    @BelongsTo(() => Users)
    user: Users

    @BelongsToMany(() => News, () => NewsHasTags)
    news: News[]

}