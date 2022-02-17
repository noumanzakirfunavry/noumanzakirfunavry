import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from "sequelize-typescript";
import { InfographicsAttachments } from "./infographics.attachments.entity";
import { InfographicsHasQuotes } from "./infographics.has.quotes.entity";
import { InfographicsHasTags } from "./infographics.has.tags.entity";
import { InfographicsVisitors } from "./infographics.visitors.entity";
import { Quotes } from "./quotes.entity";
import { SeoDetails } from "./seo.details.entity";
import { Tags } from "./tags.entity";
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
    seoDetails : SeoDetails

    @HasMany(() => InfographicsAttachments,'infographicId')
    infographicsAttachment : InfographicsAttachments[]

    @HasMany(() =>  InfographicsVisitors)
    infographicsVisitors : InfographicsVisitors[]

    @BelongsToMany(() => Tags, () => InfographicsHasTags)
    tags : Tags[]

    @BelongsToMany(() => Quotes,() => InfographicsHasQuotes)
    quotes : Quotes[]
}