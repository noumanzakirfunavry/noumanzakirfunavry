import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({
    paranoid: true,
    timestamps: true
})
export class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number

    @Column
    username: string

    @Column
    email: string

    @Column
    password: string

    @Column
    @CreatedAt
    createdAt: Date
}