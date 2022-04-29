import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";
import { EpisodesHasQuotes } from "./episodes.has.quotes.entity";
import { Infographics } from "./infographics.entity";
import { InfographicsHasQuotes } from "./infographics.has.quotes.entity";
import { News } from "./news.entity";
import { NewsHasQuotes } from "./news.has.quotes.entity";
import { Pages } from "./pages.entity";
import { PagesHasQuotes } from "./pages.has.quotes.entity";

@Table
export class Quotes extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    name : string

    // @BelongsToMany(() => News, () => NewsHasQuotes)
    // news : News[]

    @BelongsToMany(() => Pages,() => PagesHasQuotes)
    pages : Pages[]

    @BelongsToMany(() => Infographics,() => InfographicsHasQuotes)
    infographics : Infographics[]

    @BelongsToMany(() => Episodes,() => EpisodesHasQuotes)
    episodes : Episodes[]

}