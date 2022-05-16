import { EntityTypesComments } from "@cnbc-monorepo/enums";
import { Table, Model, ForeignKey, Column, BelongsTo, PrimaryKey, AutoIncrement, Unique, DataType } from "sequelize-typescript";
import { Sessions } from "./sessions.entity";
import { Users } from "./users.entity";

@Table({
    timestamps: true
})
export class Comments extends Model {

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id: number;

    @Column({
			type: DataType.ENUM,
			values: Object.values(EntityTypesComments),
		})
		entityType: EntityTypesComments

    @Column
    entityId: number

    @Column
    comment: string

    @ForeignKey(() => Sessions)
    @Column
    sessionId: number
    @BelongsTo(() => Sessions)
    session: Sessions

    @ForeignKey(() => Users)
    @Column
    userId: number
    @BelongsTo(() => Users)
    user: Users
}