import { AddCategoriesRequestDto, DeleteCategoryRequestDto, GetAllCategoriesRequestDto, UpdateCategoriesRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller('Admin/api/admin/categories')
export class CategoriesController{
    constructor(
        private categoryService:CategoriesService
    ){}

    @Post('add')
    async add(@Body() body:AddCategoriesRequestDto){
        return await this.categoryService.add(body)
    }

    @Get('getById/:id')
    async getById(@Param('id') id:number){
        return await this.categoryService.getById(id)
    }

    @Delete('delete') 
    async delete(@Query() query:DeleteCategoryRequestDto){
        return await this.categoryService.delete(query.ids)
    }

    @Get('getAll')
    async getAll(@Query() query:GetAllCategoriesRequestDto){
        return this.categoryService.getAll(query)
    }

    @Put('update/:id')
    async update(id:number,@Body() body:UpdateCategoriesRequestDto){
        return await this.categoryService.update(id,body)
    }

    @Put('updateOrder')
    async updateOrder(){}

}