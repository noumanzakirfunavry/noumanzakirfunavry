import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Pages } from "./pages.entity";
import { Tags } from "./tags.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class PagesHasTags extends Model{
@ForeignKey(() => Tags)
@Column
tagsId : number

@ForeignKey(() => Pages)
@Column
pagesId : number
}