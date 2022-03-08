import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany } from "sequelize-typescript";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Roles extends Model{

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @HasMany(() => Users)
    users : Users[]
}