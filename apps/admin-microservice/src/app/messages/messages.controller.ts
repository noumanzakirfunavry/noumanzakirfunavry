import { JwtAuthGuard, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreateMessageRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllMessagesRequestDto, GetAllMessagesResponseDto, GetMessageByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('admin/api/admin/messages')
export class MessagesController {
    constructor(
        private messageService : MessagesService
    ){}

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Post()
    async createMessage(@Body() body : CreateMessageRequestDto) : Promise<GenericResponseDto>{
        return await this.messageService.createMessage(body);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Put(":id")
    async updateMessage(@Param("id") id : number,@Body() body : CreateMessageRequestDto) : Promise<GenericResponseDto>{
        return await this.messageService.updateMessage(body,id);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("getAll")
    async getAllMessages(@Query() query : GetAllMessagesRequestDto) : Promise<GetAllMessagesResponseDto>{
        return await this.messageService.getAllMessages(query);
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get(":id")
    async getMessageById(@Param("id") id : number) : Promise<GetMessageByIdResponseDto>{
        return await this.messageService.getMessageById(id);
    }

    
    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Delete()
    async deleteMessageById(@Query() query : DeleteAlexaAudioRequestDto) : Promise<GenericResponseDto>{
        return await this.messageService.deleteMessageById(query);
    }
}
