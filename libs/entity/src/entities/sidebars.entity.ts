import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany } from "sequelize-typescript";
import { Pages } from "./pages.entity";
import { SidebarElements } from "./sidebar.elements.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Sidebars extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
title : string

@HasMany(() => Pages)
pages : Pages[]

@HasMany(() => SidebarElements)
sideBarElements : SidebarElements[]
}