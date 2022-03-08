import { AutoIncrement, BelongsTo, Column, ForeignKey, PrimaryKey, Table, Unique,Model } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class AlexaAudio extends Model{
    @AutoIncrement
    @PrimaryKey
    @Unique(true)
    @Column
    id : number

    @Column
    date : Date

    @Column
    timestamp : Date

    @Column
    description : string

    @Column
    title : string

    @ForeignKey(() => Attachments)
    @Column
    attachmentId : number

    @BelongsTo(() => Attachments)
    attachments : Attachments

    
}