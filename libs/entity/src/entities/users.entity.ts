import { AutoIncrement, Column, HasMany, PrimaryKey, Table, Unique,Model, BelongsToMany, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Banner } from "./banner.entity";
import { Branches } from "./branches.entity";
import { BreakingNews } from "./breaking.news.entity";
import { Categories } from "./categories.entity";
import { ChangeLogs } from "./change.logs.entity";
import { EditorsChoiceNews } from "./editors.choice.news.entity";
import { Episodes } from "./episodes.entity";
import { FeaturedNews } from "./featured.news.entity";
import { Infographics } from "./infographics.entity";
import { Jobs } from "./jobs.entity";
import { LiveStreamLinks } from "./live.stream.links.entity";
import { Menus } from "./menus.entity";
import { NewsAlert } from "./news.alert.entity";
import { News } from "./news.entity";
import { Pages } from "./pages.entity";
import { Presenters } from "./presenters.entity";
import { Programs } from "./programs.entity";
import { PushNotification } from "./push.notification.entity";
import { QuickLinks } from "./quick.links.entity";
import { Rights } from "./rights.entity";
import { Roles } from "./roles.entity";
import { Sessions } from "./sessions.entity";
import { SocialMediaLink } from "./social.media.link.entity";
import { SocialMediaPosts } from "./social.media.posts.entity";
import { Tags } from "./tags.entity";
import { TrendingNews } from "./trending.news.entity";
import { TrendingNowNews } from "./trending.now.news.entity";
import { UsersHasRights } from "./users.has.rights.entity";

@Table({
    paranoid : true,
    timestamps : true
})
export class Users extends Model{

    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id : number

    @Column
    name : string

    @Column
    userName : string

    @Column
    password : string

    @Column
    email : string

    @Column({
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @Column({
        type : DataType.BOOLEAN
    })
    isProUser : boolean

    @HasMany(() => Banner)
    banners : Banner[]

    @HasMany(() => Branches)
    branches : Branches[]

    @HasMany(() => BreakingNews)
    breakingNews : BreakingNews[]

    @HasMany(() => Categories)
    categories : Categories[]

    @HasMany(() => News)
    news : News[]
    
    @HasMany(() => ChangeLogs)
    changeLogs : ChangeLogs[]

    @HasMany(() => EditorsChoiceNews)
    editorsChoiceNews : EditorsChoiceNews[]

    @HasMany(() => Episodes)
    episodes : Episodes[]

    @HasMany(() => FeaturedNews)
    featuredNews : FeaturedNews[]

    @HasMany(() => Infographics)
    infographics : Infographics[]

    @HasMany(() => Jobs)
    jobs : Jobs[]

    @HasMany(() => LiveStreamLinks)
    liveStreamLinks : LiveStreamLinks[]

    @HasMany(() => Menus)
    menu : Menus[]

    @HasMany(() => NewsAlert)
    newsAlert : NewsAlert[]

    @HasMany(() => Pages)
    pages : Pages[]

    @HasMany(() => Presenters)
    presenters : Presenters[]

    @HasMany(() => Programs)
    programs : Programs[]

    @HasMany(() => PushNotification)
    pushNotifications : PushNotification[]

    @HasMany(() => QuickLinks)
    quickLinks : QuickLinks[]

    @BelongsToMany(() => Rights, () => UsersHasRights)
    rights : Rights[]

    @ForeignKey(() => Roles)
    @Column
    rolesId : number
    @BelongsTo(() => Roles)
    roles : Roles

    @HasMany(() => Sessions)
    sessions : Sessions[]

    @HasMany(() => SocialMediaLink)
    socialMediaLinks : SocialMediaLink[]

    @HasMany(() => SocialMediaPosts)
    socialMediaPosts : SocialMediaPosts[]

    @HasMany(() => Tags)
    tags : Tags[]

    @HasMany(() => TrendingNews)
    trendingNews : TrendingNews[]

    @HasMany(() => TrendingNowNews)
    trendingNowNews : TrendingNowNews[]
}