import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class SocialMediaLink extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    platform : string

    @Column
    url : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users
}