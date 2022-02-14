import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { Infographics } from "./infographics.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class InfographicsAttachments extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    position : number
    
    @Column
    title : string
    
    @Column({
        type : DataType.BOOLEAN
    })
    isCoverImage : boolean

    @ForeignKey(() =>  Infographics)
    @Column
    infographicId : number
    @BelongsTo(() => Infographics)
    infographics : Infographics

    @ForeignKey(() => Attachments)
    @Column
    attachmentId : number
    @BelongsTo(() => Attachments)
    attachments : Attachments
}