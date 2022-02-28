import { Table,Model, Column, ForeignKey } from "sequelize-typescript";
import { News } from "./news.entity";
import { Tags } from "./tags.entity";

@Table
export class NewsHasTags extends Model{


    @ForeignKey(() => Tags)
    @Column
    tagId : number

    @ForeignKey(() => News)
    @Column
    newsId : number

}