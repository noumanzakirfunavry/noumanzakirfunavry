import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Rights } from "./rights.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class UsersHasRights extends Model{
    @ForeignKey(() => Users)
    @Column
    usersId : Users

    @ForeignKey(() => Rights)
    @Column
    rightsId : Rights
}