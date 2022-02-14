import { Table, Model, PrimaryKey, AutoIncrement, Unique, Column, DataType } from "sequelize-typescript";
@Table({
    paranoid : true,
    timestamps : true
})
export class Alerts extends Model {

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number

    @Column
    title: string

    @Column
    description: string

    @Column
    url: string
    
    @Column({
        type: DataType.BOOLEAN
    })
    needToSend: boolean
}