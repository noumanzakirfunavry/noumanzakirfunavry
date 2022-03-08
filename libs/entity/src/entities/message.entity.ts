import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { MessageHasAttachments } from "./message.has.attachments.entity";
import { MessageType } from "./message.type.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Message extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    subject : string

    @Column
    message : string
    
    @Column
    email : string

    @Column
    phoneNo : string

    @ForeignKey(() => MessageType)
    @Column
    messageTypeId : number
    @BelongsTo(() => MessageType)
    messageType : MessageType

    @BelongsToMany(() => Attachments,() => MessageHasAttachments)
    attachments : Attachments[]
}