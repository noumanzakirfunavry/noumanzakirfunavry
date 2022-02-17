import { Table, Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";
import { EpisodesHasTags } from "./episodes.has.tags.entity";
import { Infographics } from "./infographics.entity";
import { InfographicsHasTags } from "./infographics.has.tags.entity";
import { News } from "./news.entity";
import { NewsHasTags } from "./news.has.tags.entity";
import { Pages } from "./pages.entity";
import { PagesHasTags } from "./pages.has.tags.entity";
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

    @BelongsToMany(() => Infographics,() => InfographicsHasTags)
    infographics : Infographics[]

    @BelongsToMany(() => Episodes,() => EpisodesHasTags)
    episodes : Episodes[]

    @BelongsToMany(() => Pages,() => PagesHasTags)
    pages : Pages[]
}