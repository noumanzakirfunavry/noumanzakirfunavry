import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";
import { Tags } from "./tags.entity";

@Table({
    timestamps : true
})
export class EpisodesHasTags extends Model{
    @ForeignKey(() => Tags)
    @Column
    tagsId : number

    @ForeignKey(() => Episodes)
    @Column
    episodesId : number
}