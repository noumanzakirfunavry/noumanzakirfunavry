import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, BelongsToMany } from "sequelize-typescript";
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

    @BelongsToMany(() => News, () => NewsHasQuotes)
    news : News[]

    @BelongsToMany(() => Pages,() => PagesHasQuotes)
    pages : Pages[]

}