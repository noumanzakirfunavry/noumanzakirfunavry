import { Module } from "@nestjs/common";
import { QuickLinksModule } from "./quickLinks/quickLinks.module";
import { QuotesModule } from "./quotes/quotes.module";
import { TagsModule } from "./tags/tags.module";
import { NewsModule } from './news/news.module';
import { NewsTypeModule } from './news-type/news-type.module';

@Module({
    imports:[
        TagsModule,
        QuotesModule,
        QuickLinksModule,
        NewsModule,
        NewsTypeModule,
    ],
})
export class  AdminModule{}