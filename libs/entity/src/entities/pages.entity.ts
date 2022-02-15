import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Banner } from "./banner.entity";
import { PagesHasQuotes } from "./pages.has.quotes.entity";
import { Quotes } from "./quotes.entity";
import { SeoDetails } from "./seo.details.entity";
import { Sidebars } from "./sidebars.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Pages extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@Column
content : string

@Column({
    type : DataType.BOOLEAN
})
isActive : boolean

@Column({
    type : DataType.BOOLEAN
})
showSideBar : boolean

@ForeignKey(() => Sidebars)
@Column
sidebarId : number
@BelongsTo(() => Sidebars)
sideBars : Sidebars

@ForeignKey(() => Users)
@Column
publishedBy : number
@BelongsTo(() => Users)
users : Users

@ForeignKey(() => SeoDetails)
@Column
seodetailsId : number
@BelongsTo(() => SeoDetails)
seoDetails : SeoDetails

@ForeignKey(() => Banner)
@Column
bannerId : number
@BelongsTo(() => Banner)
banner : Banner

@BelongsToMany(() => Quotes,() => PagesHasQuotes)
quotes : Quotes[]


}