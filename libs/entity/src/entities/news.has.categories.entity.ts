import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Categories } from "./categories.entity";
import { News } from "./news.entity";

@Table({
    timestamps : true
})
export class NewsHasCategories extends Model{

    @ForeignKey(() => News)
    @Column
    newsId : number

    @ForeignKey(() => Categories)
    @Column
    categoryId : number

}