import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Pages } from "./pages.entity";
import { Quotes } from "./quotes.entity";
@Table({
    paranoid : true,
    timestamps : true
})
export class PagesHasQuotes extends Model{
@ForeignKey(() => Pages)
@Column
pagesId : number

@ForeignKey(() => Quotes)
@Column
quotesId : number
}