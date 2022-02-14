import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class EpisodeVisitors extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    ipAddress : number

    @Column
    visitDate : Date

    @Column
    count : number

    @ForeignKey(() =>Episodes)
    @Column
    episodeId : number
    
    @BelongsTo(() => Episodes)
    episode : Episodes
}