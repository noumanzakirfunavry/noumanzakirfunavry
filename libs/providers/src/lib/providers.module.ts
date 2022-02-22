import { Module } from '@nestjs/common';
import { QuickLinksProvider } from '../providers/quick.links.provider';
import { QuotesProvider } from '../providers/quotes.provider';
import { TagsProvider } from '../providers/tags.provider';


@Module({
  providers:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,

  ],
  exports:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
  
  ]
})
export class ProvidersModule {}
