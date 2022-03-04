import { Table,Model, ForeignKey, Column } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { Message } from "./message.entity";


@Table
export class MessageHasAttachments extends Model{
@ForeignKey(() => Message)
@Column
messageId : number

@ForeignKey(() => Attachments)
@Column
attachmentsId : number
}