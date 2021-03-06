import { SocialMediaPlatformTypes } from "@cnbc-monorepo/enums";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Users } from "./users.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class SocialMediaPosts extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    entityType : string

    @Column
    entityId : number

    @Column({
        type : DataType.ENUM,
    values : Object.values(SocialMediaPlatformTypes)

    })
    platform : SocialMediaPlatformTypes

    @Column
    platformPostURL : string

    @ForeignKey(() => Users)
    @Column
    publishedBy : number 
    @BelongsTo(() => Users)
    user : Users
}