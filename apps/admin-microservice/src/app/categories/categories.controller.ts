import { Public, Rights, Roles } from "@cnbc-monorepo/auth-module";
import { AddCategoriesRequestDto, DeleteCategoryRequestDto, GetAllCategoriesRequestDto, UpdateCategoriesRequestDto, UpdateOrderCategoriesRequestDto } from "@cnbc-monorepo/dtos";
import { RightsTypes, RoleTypes } from "@cnbc-monorepo/enums";
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller('admin/api/admin/categories')
export class CategoriesController{
    constructor(
        private categoryService:CategoriesService
    ){}

		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_CATEGORIES)
    @Post('add')
    async add(@Req() req,@Body() body:AddCategoriesRequestDto){
        return await this.categoryService.add(body,req.user.data.id)
    }

    @Get('getById/:id')
    async getById(@Param('id') id:number){
        return await this.categoryService.getById(id)
    }

		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_CATEGORIES)
    @Delete('delete') 
    async delete(@Query() query:DeleteCategoryRequestDto){
        return await this.categoryService.delete(query.ids)
    }

    @Get('getAll')
    async getAll(@Query() query:GetAllCategoriesRequestDto){
        return this.categoryService.getAll(query)
    }

		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_CATEGORIES)
    @Put('update/:id')
    async update(@Param("id") id:number,@Body() body:UpdateCategoriesRequestDto){
        return await this.categoryService.update(id,body)
    }

		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
		@Rights(RightsTypes.MODIFY_CATEGORIES)
    @Put('updateOrder')
    async updateOrder(@Body() body:UpdateOrderCategoriesRequestDto){
        return await this.categoryService.updateOrder(body)
    }

}