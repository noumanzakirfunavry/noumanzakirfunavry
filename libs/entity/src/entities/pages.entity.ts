import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Banner } from "./banner.entity";
import { PagesHasQuotes } from "./pages.has.quotes.entity";
import { PagesHasTags } from "./pages.has.tags.entity";
import { Quotes } from "./quotes.entity";
import { SeoDetails } from "./seo.details.entity";
import { Sidebars } from "./sidebars.entity";
import { Tags } from "./tags.entity";
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
description : string

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
sideBarId : number
@BelongsTo(() => Sidebars)
sideBars : Sidebars

@ForeignKey(() => Users)
@Column
publishedBy : number
@BelongsTo(() => Users)
users : Users

@ForeignKey(() => SeoDetails)
@Column
seoDetailsId : number
@BelongsTo(() => SeoDetails)
seoDetails : SeoDetails

@ForeignKey(() => Banner)
@Column
bannerId : number
@BelongsTo(() => Banner)
banner : Banner

@BelongsToMany(() => Quotes,() => PagesHasQuotes)
quotes : Quotes[]

@BelongsToMany(() => Tags, () => PagesHasTags)
tags : Tags[]


}