import { Roles } from '@cnbc-monorepo/auth-module';
import { AddCommentRequestDto, GenericResponseDto, GetAllCommentsRequestDto } from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('admin/api/admin/comments')
@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
export class CommentsController {
	constructor(
		private commentsService: CommentsService
	) { }

	@Get('/getAll')
	async getAllComments(@Query() getAllCommentDto: GetAllCommentsRequestDto): Promise<GenericResponseDto> {
		return await this.commentsService.getAllComments(getAllCommentDto);
	}

	@Get('/getById/:id')
	async getCommentById(@Param('id', ParseIntPipe) id: number): Promise<GenericResponseDto> {
		return await this.commentsService.getCommentById(id);
	}

	@Post('/add')
	async addComment(@Body() addCommentDto: AddCommentRequestDto, @Req() req): Promise<GenericResponseDto> {
		return await this.commentsService.addComment(addCommentDto, req.user)
	}

}
