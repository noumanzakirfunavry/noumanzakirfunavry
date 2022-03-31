import { MenuPositionTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Menus extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string
    
    @Column
    orderNo : number

    @Column
    url : string

    @Column({
        type : DataType.BOOLEAN
    })
    visible : boolean

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Menus)
    @Column({allowNull: true})
    parentMenuId : number

    @BelongsTo(() => Menus)
    menu : Menus

    @HasMany(() => Menus,'parentMenuId')
    menus : Menus[]

    @Column({
        type : DataType.ENUM,
    values : Object.values(MenuPositionTypes)

    })
    position : MenuPositionTypes

    @Column
    menuPosition : number

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users
}