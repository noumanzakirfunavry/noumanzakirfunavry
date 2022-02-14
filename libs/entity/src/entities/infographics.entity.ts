import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { InfographicsAttachments } from "./infographics.attachments.entity";
import { InfographicsVisitors } from "./infographics.visitors.entity";
import { SeoDetails } from "./seo.details.entity";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class Infographics extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    description : string

    @Column
    title : string

    @Column
    twitterLink : string

    @Column
    facebookLink : string

    @Column({
        type : DataType.BOOLEAN
    })
    visible : boolean

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users

    @ForeignKey(() => SeoDetails)
    @Column
    seoDetailId : number
    @BelongsTo(() => SeoDetails)

    @HasMany(() => InfographicsAttachments)
    infographicsAttachments : InfographicsAttachments[]

    @HasMany(() =>  InfographicsVisitors)
    infographicsVisitors : InfographicsVisitors[]
}