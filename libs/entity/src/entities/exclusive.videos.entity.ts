import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class ExclusiveVideos extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @Column
    description : string

    @Column
    order : number

    @ForeignKey(() => Attachments)
    @Column
    attachmentId : number
    @BelongsTo(() => Attachments)
    attachments : Attachments
}