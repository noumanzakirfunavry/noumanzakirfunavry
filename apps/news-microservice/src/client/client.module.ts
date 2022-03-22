import { Module } from "@nestjs/common";
import { QuickLinksModule } from "./quickLinks/quickLinks.module";
import { QuotesModule } from "./quotes/quotes.module";
import { TagsModule } from "./tags/tags.module";
import { NewsTypesModule } from './news-types/news-types.module';

@Module({
    imports:[
        TagsModule,
        QuickLinksModule,
        QuotesModule,
        NewsTypesModule
    ],
})
export class  ClientModule{}