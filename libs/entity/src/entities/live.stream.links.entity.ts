import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class LiveStreamLinks extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @Column
    description : string

    @Column
    liveStreamURL : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Users)
    @Column
    userId : number
    @BelongsTo(() => Users)
    users : Users

}