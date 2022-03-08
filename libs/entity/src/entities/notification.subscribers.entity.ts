import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType } from "sequelize-typescript";


@Table({
    paranoid : true,
    timestamps : true
})
export class NotificationSubscriber extends Model{

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    deviceId : string

    @Column({
        type : DataType.BOOLEAN
    })
    hasSubscribed : boolean

    @Column({
        type : DataType.BOOLEAN
    })
    sendNewsNotification : boolean

    @Column({
        type : DataType.BOOLEAN
    })
    sendArticleNotification : boolean
}