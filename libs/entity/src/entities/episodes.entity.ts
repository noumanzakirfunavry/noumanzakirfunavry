import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, HasMany, DataType, BelongsToMany } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { EpisodeVisitors } from "./episode.visitors.entity";
import { EpisodesHasQuotes } from "./episodes.has.quotes.entity";
import { EpisodesHasTags } from "./episodes.has.tags.entity";
import { Programs } from "./programs.entity";
import { Quotes } from "./quotes.entity";
import { SeoDetails } from "./seo.details.entity";
import { Tags } from "./tags.entity";
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

    @Column({
			type: DataType.TEXT
		})
    content : string

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
    @BelongsTo(() => Attachments,'videoId')
    video : Attachments

    @ForeignKey(() => Attachments)
    @Column
    thumbnailId : number
    @BelongsTo(() => Attachments,'thumbnailId')
    thumbnail : Attachments

    @ForeignKey(() => Users)
    @Column
    publishedBy : number
    @BelongsTo(() => Users)
    user : Users


    @HasMany(() => EpisodeVisitors,'episodeId')
    episodeVisitors : EpisodeVisitors[]

    @BelongsToMany(() => Tags,() => EpisodesHasTags)
    tags : Tags[]

    @BelongsToMany(() => Quotes,() => EpisodesHasQuotes)
    quotes : Quotes[]
} 