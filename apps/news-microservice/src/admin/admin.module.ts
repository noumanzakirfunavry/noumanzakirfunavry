import { BreakingNewsProvider } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { QuickLinksModule } from "./quickLinks/quickLinks.module";
import { QuotesModule } from "./quotes/quotes.module";
import { TagsModule } from "./tags/tags.module";
import { NewsModule } from './news/news.module';
import { NewsTypeModule } from './news-type/news-type.module';
import { BreakingNewsModule } from "./breakingNews/breakingNews.module";

@Module({
    imports:[
        TagsModule,
        QuotesModule,
        QuickLinksModule,
        NewsModule,
        NewsTypeModule,
        BreakingNewsModule,
    ],
})
export class  AdminModule{}