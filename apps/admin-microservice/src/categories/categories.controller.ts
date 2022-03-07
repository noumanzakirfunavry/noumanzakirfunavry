import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller('Admin/admin/categories')
export class CategoriesController{
    constructor(
        private categoryService:CategoriesService
    ){}

    @Post('add')
    async add(){}

    @Get('getById')
    async getById(){}

    @Delete('delete')
    async delete(){}

    @Get('getAll')
    async getAll(){}

    @Put('update')
    async update(){}

    @Put('updateOrder')
    async updateOrder(){}

}