import { AutoIncrement,  BelongsToMany,  Column,  DataType,  HasMany,  HasOne, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { AlexaAudio } from "./alexa.audio.entity";
import {AttachmentTypes} from '@cnbc-monorepo/enums'
import { BannerVariations } from "./banner.variations.entity";
import { Episodes } from "./episodes.entity";
import { InfographicsAttachments } from "./infographics.attachments.entity";
import { JobApplicants } from "./job.applicants.entity";
import { Message } from "./message.entity";
import { MessageHasAttachments } from "./message.has.attachments.entity";
import { Presenters } from "./presenters.entity";
import { Programs } from "./programs.entity";
import { News } from "./news.entity";
import { DailymotionUploadRequests } from "./dailyMotion.upload.requests.entity";
@Table({
  paranoid : true,
  timestamps : true
})
export class Attachments extends Model{
  @PrimaryKey
  @Unique
  @AutoIncrement
  @Column
  id : number

  @Column
  uploadedBy : number

  @Column({
    type : DataType.ENUM,
    values : Object.values(AttachmentTypes)
  })
  attachmentType : AttachmentTypes

  @Column 
  title : string

  @Column
  description : string

  @Column
  path : string

  @Column({
    allowNull : true,
    defaultValue : null
  })
  url : string | null

  @Column
  dailymotionVideoId : string

	@HasMany(() => DailymotionUploadRequests)
  dailymotionUploadRequest : DailymotionUploadRequests[]

  @HasOne(() => AlexaAudio,'attachmentId')
  alexaAudio : AlexaAudio

  @HasOne(() => BannerVariations)
  bannerVariations : BannerVariations

  @HasOne(() => Episodes,'videoId')
  videoEpisode : Episodes
  
  @HasOne(() => Episodes,'thumbnailId')
  thumbnailEpisode : Episodes

  @HasOne(() => InfographicsAttachments,'attachmentId')
  infographicsAttachments : InfographicsAttachments

  @HasOne(() => JobApplicants)
  jobApplicants : JobApplicants
  
  @BelongsToMany(() => Message,() => MessageHasAttachments)
  messages : Message[]

  @HasOne(() => Presenters)
  presenter : Presenters

  @HasOne(() => Programs,'thumbnailId')
  thumbnail : Programs

  @HasOne(() =>  Programs,'promoId')
  promo : Programs

  @HasMany(() => News,'videoId')
  videosNews : News[]

  @HasMany(() =>News,'thumbnailId')
  thumbnailsNews : News[]

  @HasMany(() => News, 'imageId')
  imagesNews : News[]
}