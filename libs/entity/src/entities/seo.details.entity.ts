import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, HasMany } from "sequelize-typescript";
import { Episodes } from "./episodes.entity";
import { Infographics } from "./infographics.entity";
import { News } from "./news.entity";
import { Pages } from "./pages.entity";
import { Programs } from "./programs.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class SeoDetails extends Model{
@PrimaryKey
@AutoIncrement
@Unique
@Column
id : number

@Column
slugLine : string

@Column
title : string

@Column
description : string

@Column
keywords : number

@HasMany(() => News)
news : News[]

@HasMany(() => Episodes)
episodes : Episodes[]

@HasMany(() => Infographics)
infographics : Infographics[]

@HasMany(() => Pages)
pages : Pages[]

@HasMany(() => Programs)
programs : Programs[]
}