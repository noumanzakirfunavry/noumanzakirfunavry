import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany, BelongsToMany, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { Episodes } from "./episodes.entity";
import { Presenters } from "./presenters.entity";
import { ProgramsHasPresenters } from "./programs.has.presenters.entity";
import { ProgramsSchedule } from "./programs.schedule.entity";
import { SeoDetails } from "./seo.details.entity";
import { Users } from "./users.entity";


@Table({
    paranoid : true,
    timestamps : true
})
export class Programs extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    title : string

    @Column
    content : string

    @Column
    orders : number

    @Column
    firstAiredOn : Date
    
    @Column
    producedBy : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @ForeignKey(() => Users)
    @Column
    publisherId : number
    @BelongsTo(() => Users)
    user : Users

    @ForeignKey(() => SeoDetails)
    @Column
    seoDetailId : number
    @BelongsTo(() => SeoDetails)
    seoDetails : SeoDetails

    @ForeignKey(() => Attachments)
    @Column
    thumbnailId : number
    @BelongsTo(() => Attachments,'thumbnailId')
    thumbnail : Attachments

    @ForeignKey(() => Attachments)
    @Column
    promoId : number
    @BelongsTo(() => Attachments,'promoId')
    promo : Attachments

    @HasMany(() => Episodes)
    episodes : Episodes[]

    @BelongsToMany(() => Presenters,() => ProgramsHasPresenters)
    presenters : Presenters[]

    @HasMany(() => ProgramsSchedule)
    programSchedule : ProgramsSchedule[]

}