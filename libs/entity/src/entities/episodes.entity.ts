import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, HasMany, DataType } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { EpisodeVisitors } from "./episode.visitors.entity";
import { Programs } from "./programs.entity";
import { SeoDetails } from "./seo.details.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Episodes extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    airedOn : Date
    
    @Column
    title : string

    @Column
    description : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean


    @ForeignKey(() => Programs)
    @Column
    programId : number
    @BelongsTo(() => Programs)
    program : Programs 

    @ForeignKey(() => SeoDetails)
    @Column
    seoDetailId : number
    @BelongsTo(() => SeoDetails)
    seoDetails : SeoDetails

    @ForeignKey(() => Attachments)
    @Column
    videoId : number

    @ForeignKey(() => Attachments)
    @Column
    thumbnailId : number
    
    @BelongsTo(() => Attachments)
    attachment : Attachments

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users


    @HasMany(() => EpisodeVisitors)
    episodeVisitors : EpisodeVisitors[]
}