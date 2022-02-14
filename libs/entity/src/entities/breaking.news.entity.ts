import { Table,Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class BreakingNews extends Model{
    @Column
    position : number

    @Column
    newsLink : string

    @Column
    title : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Users)
    @Column
    addedBy : number

    @BelongsTo(() => Users)
    user : Users

}