import { Module } from '@nestjs/common';
import { BranchesProvider } from '../providers/branches.provider';
import { BreakingNewsProvider } from '../providers/breaking.news.provider';
import { CategoriesProvider } from '../providers/categories.provider';
import { DepartmentsProvider } from '../providers/departments.provider';
import { JobsProvider } from '../providers/jobs.provider';
import { QuickLinksProvider } from '../providers/quick.links.provider';
import { QuotesProvider } from '../providers/quotes.provider';
import { TagsProvider } from '../providers/tags.provider';


@Module({
  providers:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...BreakingNewsProvider,
    ...JobsProvider,
    ...BranchesProvider,
    ...DepartmentsProvider,
    ...CategoriesProvider

  ],
  exports:[
    ...TagsProvider,
    ...QuotesProvider,
    ...QuickLinksProvider,
    ...BreakingNewsProvider,
    ...JobsProvider,
    ...BranchesProvider,
    ...DepartmentsProvider,
    ...CategoriesProvider
  
  ]
})
export class ProvidersModule {}
