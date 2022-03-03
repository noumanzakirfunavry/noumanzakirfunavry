import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Infographics } from "./infographics.entity";
import { Tags } from "./tags.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class InfographicsHasTags extends Model{
    @ForeignKey(() => Infographics)
    @Column
    infographicsId : number

    @ForeignKey(() => Tags)
    @Column
    tagsId : number
}