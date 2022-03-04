import { Table, Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, HasMany, DataType, BelongsToMany } from "sequelize-typescript";
import { Users } from '../entities/users.entity'
import { Banner } from "./banner.entity";
import { News } from "./news.entity";
import { NewsHasCategories } from "./news.has.categories.entity";
import { SidebarElements } from "./sidebar.elements.entity";
@Table({
    paranoid : true,
    timestamps : true
})
export class Categories extends Model {
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number

    @Column
    title: string

    @Column
    orders : number

    @Column({
        type: DataType.BOOLEAN
    })
    displayInHomePage: boolean

    @Column({
        type: DataType.BOOLEAN
    })
    displayInCategoryMenu: boolean

    @Column({
        type: DataType.BOOLEAN
    })
    isActive: boolean

    @ForeignKey(() => Users)
    @Column
    publishedBy: number

    @BelongsTo(() => Users)
    user: Users

    @ForeignKey(() => Categories)
    @Column
    parentCategoryId: number

    @BelongsTo(() => Categories)
    category: Categories

    @HasMany(() => Categories)
    children: Categories[]

    @BelongsToMany(() => News,() => NewsHasCategories)
    news : News[]
    
    @HasMany(() => SidebarElements)
    sideBarElements : SidebarElements[]

    @ForeignKey(() => Banner)
    @Column
    bannerId : number
    @BelongsTo(() => Banner)
    banner : Banner

}