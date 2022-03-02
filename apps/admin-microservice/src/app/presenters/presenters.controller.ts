import { Rights, Roles } from '@cnbc-monorepo/auth-module';
import { CreatePresentersRequestDto, DeletePresentersRequestDto, GenericResponseDto, GetAllPresentersRequestDto, GetAllPresentersResponseDto, GetPresentersByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { PresentersService } from './presenters.service';

@Controller('presenters')
export class PresentersController {

    constructor(
        private presentersService : PresentersService 
    ){}


    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.CREATE)
    @Post()
    async addPresenter(@Req() req, @Body() body : CreatePresentersRequestDto) : Promise<GenericResponseDto>{
        return await this.presentersService.addPresenter(body,req)
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.UPDATE)
    @Put(":id")
    async updatePresenter(@Param("id") id : number,@Body() body : CreatePresentersRequestDto) : Promise<GenericResponseDto>{
        return await this.presentersService.updatePresenter(body,id)
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get(":id")
    async getPresenterById(@Param("id") id : number) : Promise<GetPresentersByIdResponseDto>{
        return await this.presentersService.getPresenterById(id)
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get("all/presenter")
    async getAllPresenters(@Query() query : GetAllPresentersRequestDto) : Promise<GetAllPresentersResponseDto>{
        return await this.presentersService.getAllPresenters(query)
    }

    @Roles(RoleTypes.Admin)
    @Delete()
    async deletePresenterById(@Query() query : DeletePresentersRequestDto) : Promise<GenericResponseDto>{
        return await this.presentersService.deletePresenterById(query)
    }
}
