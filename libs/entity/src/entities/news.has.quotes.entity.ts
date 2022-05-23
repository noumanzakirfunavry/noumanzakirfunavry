import { Table,Model, ForeignKey, Column, BelongsTo, PrimaryKey, AutoIncrement, Unique } from "sequelize-typescript";
import { News } from "./news.entity";
import { Quotes } from "./quotes.entity";

@Table({
    timestamps : true
})
export class NewsHasQuotes extends Model{

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number;

   @Column
   quoteSymbol : string

   @Column
   quoteTitle : string

   @Column
   quoteTickerId : number

   @ForeignKey(() => News)
   @Column
   newsId : number
   @BelongsTo(() => News)
   news : News

}