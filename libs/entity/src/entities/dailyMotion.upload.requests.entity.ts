import { DailymotionUploadStatus } from "@cnbc-monorepo/enums";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Attachments } from "./attachments.entity";

@Table({
	timestamps: true
})
export class DailymotionUploadRequests extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id: number

	@Column
	title: string

	@Column
	tags: string

	@Column
	channel: string

	@Column
	description: string

	@Column({
		type: DataType.BOOLEAN,
		defaultValue: true
	})
	toBePublished: boolean

	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false
	})
	toBePrivate: boolean

	@Column({
		type: DataType.BOOLEAN,
		defaultValue: false
	})
	isCreatedForKids: boolean

	@Column({
		type: DataType.ENUM,
		values: Object.values(DailymotionUploadStatus),
		defaultValue: DailymotionUploadStatus.PENDING
	})
	status: DailymotionUploadStatus

	@Column
	progressUrl: string

	@Column
	localPath: string

	@Column
	error: string

	@ForeignKey(() => Attachments)
	@Column
	attachmentId: number
	@BelongsTo(() => Attachments)
	attachment: Attachments
	// @Column({
	// 	type: DataType.DATE
	// })
	// uploadedAt: number
}