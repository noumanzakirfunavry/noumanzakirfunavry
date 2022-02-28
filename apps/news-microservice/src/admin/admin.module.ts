import { Module } from "@nestjs/common";
import { QuickLinksModule } from "./quickLinks/quickLinks.module";
import { QuotesModule } from "./quotes/quotes.module";
import { TagsModule } from "./tags/tags.module";

@Module({
    imports:[
        TagsModule,
        QuotesModule,
        QuickLinksModule,
    ],
})
export class  AdminModule{}