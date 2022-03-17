import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Rights } from "./rights.entity";
import { Users } from "./users.entity";


@Table({
    timestamps : true
})
export class UsersHasRights extends Model{
    @ForeignKey(() => Users)
    @Column
    usersId : number

    @ForeignKey(() => Rights)
    @Column
    rightsId : number
}