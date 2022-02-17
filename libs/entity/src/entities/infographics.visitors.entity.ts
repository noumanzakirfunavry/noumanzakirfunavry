import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Infographics } from "./infographics.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class InfographicsVisitors extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    ipAddress : string

    @Column
    date : Date

    @Column
    count : number

    @ForeignKey(() => Infographics)
    @Column
    infographicsId : number
    @BelongsTo(() =>  Infographics)
    infographics : Infographics
}