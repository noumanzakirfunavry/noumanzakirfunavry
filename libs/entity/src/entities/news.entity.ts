import { ElkService } from '@cnbc-monorepo/elk';
import { ContentTypes, NewsTypes } from '@cnbc-monorepo/enums';
import {
  AfterBulkDestroy,
  AfterBulkUpdate,
  AfterCreate,
  AutoIncrement,
  BeforeCreate,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Attachments } from './attachments.entity';
import { BreakingNews } from './breaking.news.entity';
import { Categories } from './categories.entity';
import { ContentAnalytics } from './content.analytics.entity';
import { EditorsChoiceNews } from './editors.choice.news.entity';
import { ExclusiveVideos } from './exclusive.videos.entity';
import { FeaturedNews } from './featured.news.entity';
import { NewsHasCategories } from './news.has.categories.entity';
import { NewsHasQuotes } from './news.has.quotes.entity';
import { NewsHasTags } from './news.has.tags.entity';
import { NewsVisitors } from './news.visitors.entity';
import { Quotes } from './quotes.entity';
import { SeoDetails } from './seo.details.entity';
import { Tags } from './tags.entity';
import { TrendingNews } from './trending.news.entity';
import { TrendingNowNews } from './trending.now.news.entity';
import { Users } from './users.entity';

@Table({
  paranoid: true,
  timestamps: true,
})
export class News extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @Column
  title: string;

  @Column
  content: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  isPro: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  visible: boolean;

  @Column({
    type: DataType.ENUM,
    values: Object.values(ContentTypes),
  })
  contentType: ContentTypes;

  @ForeignKey(() => Attachments)
  @Column
  videoId: number;
  @BelongsTo(() => Attachments, 'videoId')
  video: Attachments;

  @ForeignKey(() => Attachments)
  @Column
  thumbnailId: number;
  @BelongsTo(() => Attachments, 'thumbnailId')
  thumbnail: Attachments;

  @ForeignKey(() => Attachments)
  @Column
  imageId: number;
  @BelongsTo(() => Attachments, 'imageId')
  image: Attachments;

  @Column
  authorName: string;
  @Column
  facebookLink: string;
  @Column
  twitterLink: string;
  @Column({
    type: DataType.ENUM,
    values: Object.values(NewsTypes),
  })
  newsType: NewsTypes;

  @Column({
    type: DataType.BOOLEAN,
  })
  showOnHomePage: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  isActive: boolean;

  @ForeignKey(() => SeoDetails)
  @Column
  seoDetailId: number;
  @BelongsTo(() => SeoDetails)
  seoDetail: SeoDetails;

  @ForeignKey(() => Users)
  @Column
  publishedBy: number;
  @BelongsTo(() => Users)
  user: Users;

  @BelongsToMany(() => Categories, () => NewsHasCategories)
  categories: Categories[];

  @BelongsToMany(() => Tags, () => NewsHasTags)
  tags: Tags[];

  @BelongsToMany(() => Quotes, () => NewsHasQuotes)
  quotes: Quotes[];

  @HasMany(() => ContentAnalytics)
  contentAnalytics: ContentAnalytics[];

  @HasMany(() => EditorsChoiceNews)
  editorsChoiceNews: EditorsChoiceNews[];

  @HasOne(() => FeaturedNews)
  featuredNews: FeaturedNews;

  @HasMany(() => TrendingNews)
  trendingNews: TrendingNews[];

  @HasMany(() => TrendingNowNews)
  trendingNowNews: TrendingNowNews[];

  @HasMany(() => NewsVisitors)
  newVisitors: NewsVisitors[];

  @HasOne(() => ExclusiveVideos)
  exclusiveVideo: ExclusiveVideos;

  @HasMany(() => BreakingNews)
  breakingNews: BreakingNews[];

  // @BeforeCreate
  @AfterCreate
  static async elkIndex(instance: News) {
    // ElkService.index({ index: 'news', document: instance.toJSON() });

    // const response = await instance.reload({
    //   include: [
    //     { model: Tags, required: false },
    //     { model: Quotes, required: false },
    //   ],
    // });
    // console.log(
    //   '🚀 ~ file: news.entity.ts ~ line 149 ~ News ~ elkIndex ~ response',
    //   response
    // );
    // console.log(instance.user);

    ///////////////////////////////////////

    // const menu = await this.MenuRepo.findAll({
    //   where: { id: instance.id },
    //   include: [{ model: Menus, as: 'childMenus' }],
    // });
    // console.log(menu);

    // //////////////////////////

    // console.log(instance.toJSON())
  }

  // @AfterBulkDestroy
  // @AfterBulkUpdate
  // static async elkDelete(instance: News, options) {
  //   console.log(
  //     '🚀 ~ file: news.entity.ts ~ line 181 ~ News ~ elkDelete ~ options',
  //     options
  //   );
  //   console.log(
  //     '🚀 ~ file: news.entity.ts ~ line 183 ~ News ~ elkDelete ~ instance',
  //     instance.deletedAt
  //   );

  //   // console.log(
  //   //   '🚀 ~ file: news.entity.ts ~ line 180 ~ News ~ elkDelete ~ instance',
  //   //   instance
  //   // );

  //   ElkService.deleteByQuery({
  //     index: 'news',
  //     query: {
  //       match: {
  //         id: instance.id,
  //       },
  //     },
  //   });

  //   // await instance.reload({ include: ['user'] });
  //   // console.log(instance.user);

  //   ///////////////////////////////////////

  //   // const menu = await this.MenuRepo.findAll({
  //   //   where: { id: instance.id },
  //   //   include: [{ model: Menus, as: 'childMenus' }],
  //   // });
  //   // console.log(menu);

  //   // //////////////////////////

  //   // console.log(instance.toJSON())
  // }
}
