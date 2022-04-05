import { Public, Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreatePresentersRequestDto, DeletePresentersRequestDto, GenericResponseDto, GetAllPresentersRequestDto, GetAllPresentersResponseDto, GetPresentersByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { PresentersService } from './presenters.service';

@Controller('admin/api/admin/presenters')
export class PresentersController {

    constructor(
        private presentersService: PresentersService
    ) { }

    @Roles(RoleTypes.Admin)
    @Get("getAll")
    async getAllPresenters(@Query() query: GetAllPresentersRequestDto): Promise<GetAllPresentersResponseDto> {
        return await this.presentersService.getAllPresenters(query)
    }

    @Roles(RoleTypes.Admin)
    @Post()
    async addPresenter(@Req() req, @Body() body: CreatePresentersRequestDto): Promise<GenericResponseDto> {
        return await this.presentersService.addPresenter(body, req)
    }

    @Roles(RoleTypes.Admin)
    @Put(":id")
    async updatePresenter(@Param("id") id: number, @Body() body: CreatePresentersRequestDto): Promise<GenericResponseDto> {
        return await this.presentersService.updatePresenter(body, id)
    }

    @Roles(RoleTypes.Admin)
    @Get(":id")
    async getPresenterById(@Param("id") id: number): Promise<GetPresentersByIdResponseDto> {
        return await this.presentersService.getPresenterById(id)
    }


    @Roles(RoleTypes.Admin)
    @Delete()
    async deletePresenterById(@Query() query: DeletePresentersRequestDto): Promise<GenericResponseDto> {
        return await this.presentersService.deletePresenterById(query)
    }

    @Public()
    @Get("client/:id")
    async getPresenterByIdClient(@Param("id") id: number): Promise<GetPresentersByIdResponseDto> {
        return await this.presentersService.getPresenterById(id)
    }

    @Public()
    @Get("client/getAll")
    async getAllPresentersClient(@Query() query: GetAllPresentersRequestDto): Promise<GetAllPresentersResponseDto> {
        return await this.presentersService.getAllPresenters(query)
    }
}
