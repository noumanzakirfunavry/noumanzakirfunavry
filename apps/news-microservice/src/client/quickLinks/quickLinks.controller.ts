import { Public } from '@cnbc-monorepo/auth-module';
import {
  AddQuickLinksRequestDto,
  DeleteQuickLinkRequestDto,
  GetAllQuickLinksRequestDto,
  PaginatedRequestDto,
  UpdateQuickLinksRequestDto,
} from '@cnbc-monorepo/dtos';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { QuickLinksService } from './quickLinks.service';

@Controller('news/api/client/quickLinks')
export class QuickLinksController {
  constructor(private quickLinksService: QuickLinksService) {}

  @Public()
  @Get('getAll')
  async getAllQuickLinks(@Query() query: PaginatedRequestDto) {
    return await this.quickLinksService.getAllQuickLinks(query);
  }

  @Public()
  @Get('getById/:id')
  async getById(@Param('id') id: number) {
    return await this.quickLinksService.getById(id);
  }
}
