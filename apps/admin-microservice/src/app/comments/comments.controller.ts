import { JwtAuthGuard, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto } from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('admin/api/admin/alerts/comments')
export class CommentsController {
    constructor(
        private commentService : CommentsService
    ){}

    // @Roles(RoleTypes.Admin,RoleTypes.Super_Admin)
    // @UseGuards(JwtAuthGuard)
    // @Post()
    // async addComment(@Req() req, @Body() body) : Promise<GenericResponseDto>{
    //     this.commentService.addComment(req.user.data,body)
    // }

}
