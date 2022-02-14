import { BannerVariationSizeTypes } from "@cnbc-monorepo/enums";
import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";
import { Banner } from "./banner.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class BannerVariations extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number


@Column({
    type : DataType.ENUM
})
size : BannerVariationSizeTypes

@ForeignKey(() => Attachments)
@Column
attachmentId : number

@BelongsTo(() => Attachments)
attachment : Attachments

@ForeignKey(() => Banner)
@Column
bannerId : number

@BelongsTo(() => Banner)
banner : Banner

}