import { DeviceTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { ChangeLogs } from "./change.logs.entity";
import { Comments } from "./comments.entity";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class Sessions extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    startTime : Date

    @Column
    deviceId : string

    @Column
    endTime : Date

    @Column({
        type : DataType.ENUM,
    values : Object.values(DeviceTypes)

    })
    deviceType : DeviceTypes
    
    @ForeignKey(() => Users)
    @Column
    usersId : number
    @BelongsTo(() => Users)
    users : Users

    @HasMany(() => ChangeLogs)
    changeLogs : ChangeLogs[]

    @HasMany(() => Comments)
    comments : Comments[]
}