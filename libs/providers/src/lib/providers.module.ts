import { Jobs } from '@cnbc-monorepo/entity';
import { Module } from '@nestjs/common';
import { JobsProvider } from '../providers/jobs.provider';
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
    ...JobsProvider

  ],
  exports:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...BreakingNewsProvider,
    ...JobsProvider
  
  ]
})
export class ProvidersModule {}
