import { DailymotionUploadStatus } from "@cnbc-monorepo/enums";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

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
	status: string

	@Column({
		type: DataType.ENUM,
		values: Object.values(DailymotionUploadStatus)

	})
	localPath: DailymotionUploadStatus

	@Column
	error: string

	@Column({
		type: DataType.DATE
	})
	uploadedAt: number
}