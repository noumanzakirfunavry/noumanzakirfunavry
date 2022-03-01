import { Table,Model, PrimaryKey, AutoIncrement, Unique, Column, DataType } from "sequelize-typescript";


@Table({
    paranoid : true,
    timestamps : true
})
export class SiteConfiguration extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    trendingNewsCount : number

    @Column
    quickLinksCount : number

    @Column
    featuredNewsCount : number

    @Column
    editorsChoiceCount : number

    @Column
    liveTvlink : string

    @Column
    googleAnalyticsLink : string

    @Column
    cnbcEmail : string

    @Column
    googleTag : string

    @Column
    alexaConfigurationJson : string

    @Column({
        type : DataType.BOOLEAN
    })
    enableAnalytics : boolean

    @Column
    googleSecretkey : string

    @Column
    googleSiteKey : string

    @Column
    googleEmbeddedLink : string
}