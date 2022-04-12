import { Public } from '@cnbc-monorepo/auth-module';
import { GetAllCategoriesForClientRequestDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Public()
@Controller('admin/api/client/categories')
export class ClientCategoriesController {

    constructor(
        private categoryService : CategoriesService
    ){}

		@Get('getById/:id')
    async getById(@Param('id') id: number){
        return await this.categoryService.getByIdClient(id)
    }

    @Get('getAll')
    async getAllForClient(@Query() query:GetAllCategoriesForClientRequestDto){
        return this.categoryService.getAllForClient(query)
    }
}
