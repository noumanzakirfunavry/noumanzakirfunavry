import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";
import { Quotes } from "./quotes.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class EpisodesHasQuotes extends Model{
    @ForeignKey(() => Episodes)
    @Column
    episodesId : number

    @ForeignKey(() => Quotes)
    @Column
    quotesId : number
}