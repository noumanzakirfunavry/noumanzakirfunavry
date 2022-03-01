import { SidebarElementTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Banner } from "./banner.entity";
import { Categories } from "./categories.entity";
import { Sidebars } from "./sidebars.entity";

@Table
export class SidebarElements extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    position : number

    @Column({
        type  : DataType.ENUM,
    values : Object.values(SidebarElementTypes)

    })
    type : SidebarElementTypes

    @ForeignKey(() => Categories)
    @Column
    categoryId : number
    @BelongsTo(() => Categories)
    category : Categories

    @ForeignKey(() => Banner)
    @Column
    bannerId : number
    @BelongsTo(() => Banner)
    banner : Banner

    @ForeignKey(() => Sidebars)
    @Column
    sideBarId : number
    @BelongsTo(() => Sidebars)
    sideBars : Sidebars
}