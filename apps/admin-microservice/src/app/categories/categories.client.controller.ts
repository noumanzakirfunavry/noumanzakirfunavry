import { GetAllCategoriesForClientRequestDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('admin/api/client/categories')
export class ClientCategoriesController {

    constructor(
        private categoryService : CategoriesService
    ){}

    @Get('getAll')
    async getAllForClient(@Query() query:GetAllCategoriesForClientRequestDto){
        return this.categoryService.getAllForClient(query)
    }
}
