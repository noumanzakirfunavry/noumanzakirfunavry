import { BreakingNewsProvider } from "@cnbc-monorepo/providers";
import { Module } from "@nestjs/common";
import { BreakingNewsModule } from "./breakingNews/breakingNews.module";
import { QuickLinksModule } from "./quickLinks/quickLinks.module";
import { QuotesModule } from "./quotes/quotes.module";
import { TagsModule } from "./tags/tags.module";

@Module({
    imports:[
        TagsModule,
        QuotesModule,
        QuickLinksModule,
        BreakingNewsModule,
    ],
})
export class  AdminModule{}