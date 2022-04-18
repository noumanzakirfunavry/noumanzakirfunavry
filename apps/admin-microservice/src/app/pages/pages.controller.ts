import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageRequestDto, CreatePageResponseDto, DeletePageResponseDto, GetAllPagesResponseDto, GetPageResponseDto, UpdatePageRequestDto, UpdatePageResponseDto } from '@cnbc-monorepo/dtos';

@Controller('/admin/pages')
export class PagesController {
	constructor(private readonly pagesService: PagesService) { }

	@Post('/create')
	create(@Body() createPageRequestDto: CreatePageRequestDto): Promise<CreatePageResponseDto> {
		return this.pagesService.create(createPageRequestDto);
	}

	@Get('/getAll')
	findAll(): Promise<GetAllPagesResponseDto> {
		return this.pagesService.findAll();
	}

	@Get('/getById/:id')
	findOne(@Param('id', ParseIntPipe) pageId: number): Promise<GetPageResponseDto> {
		return this.pagesService.findOne(pageId);
	}

	@Patch('/update/:id')
	update(@Param('id', ParseIntPipe) pageId: number, @Body() updatePageRequestDto: UpdatePageRequestDto): Promise<UpdatePageResponseDto> {
		return this.pagesService.update(pageId, updatePageRequestDto);
	}

	@Delete('/delete/:id')
	delete(@Param('id', ParseIntPipe) pageId: number): Promise<DeletePageResponseDto> {
		return this.pagesService.delete(pageId);
	}
}
