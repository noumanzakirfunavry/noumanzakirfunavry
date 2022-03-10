import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { News } from "./news.entity";
import { Quotes } from "./quotes.entity";

@Table({
    timestamps : true
})
export class NewsHasQuotes extends Model{

    @Column
    position : number

    @ForeignKey(() => News)
    @Column
    newsId : number

    @ForeignKey(() => Quotes)
    @Column
    quotesId : number

}