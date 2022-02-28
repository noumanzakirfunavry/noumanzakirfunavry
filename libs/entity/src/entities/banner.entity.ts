import { Table,Model, Column, Unique, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import {BannerTypes} from '@cnbc-monorepo/enums'
import { Users } from "./users.entity";
import { BannerVariations } from "./banner.variations.entity";
import { SidebarElements } from "./sidebar.elements.entity";
import { Categories } from "./categories.entity";
import { Pages } from "./pages.entity";
@Table({
    paranoid : true,
    timestamps : true
})
export class Banner extends Model{

    @AutoIncrement
    @PrimaryKey
    @Unique(true)
    @Column
    id : number
    
    @Column({
        type : DataType.ENUM,
    values : Object.values(BannerTypes)
    })
    type : BannerTypes

    @Column
    title : string

    @Column
    googleCode : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(()=> Users)
    @Column
    publishedBy : number

    @BelongsTo(() => Users)
    user : Users

    @HasMany(() => BannerVariations)
    bannerVariations : BannerVariations[]

    @HasMany(() => SidebarElements)
    sideBarElements : SidebarElements[]

    @HasMany(() => Categories)
    categories : Categories[]

    @HasMany(() => Pages)
    pages : Pages[]
}