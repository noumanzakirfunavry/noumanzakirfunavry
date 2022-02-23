import { Module } from '@nestjs/common';
import { BreakingNewsProvider } from '../providers/breaking.news.provider';
import { QuickLinksProvider } from '../providers/quick.links.provider';
import { QuotesProvider } from '../providers/quotes.provider';
import { TagsProvider } from '../providers/tags.provider';


@Module({
  providers:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...BreakingNewsProvider,

  ],
  exports:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...BreakingNewsProvider
  
  ]
})
export class ProvidersModule {}
