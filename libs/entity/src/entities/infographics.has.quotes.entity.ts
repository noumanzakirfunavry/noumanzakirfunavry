import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Infographics } from "./infographics.entity";
import { Quotes } from "./quotes.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class InfographicsHasQuotes extends Model{
@ForeignKey(() => Quotes)
@Column
quotesId : number

@ForeignKey(() => Infographics)
@Column
infographicsId : number
}