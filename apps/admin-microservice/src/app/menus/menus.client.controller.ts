import { Public } from '@cnbc-monorepo/auth-module';
import { PaginatedRequestDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MenusService } from './menus.service';

@Public()
@Controller('admin/api/client/menus')

export class MenusClientController {
  constructor(private readonly menusService: MenusService) {}

  @Get('/getAll')
  getAllMenus(@Query() paginationDto: PaginatedRequestDto) {
    return this.menusService.getMenusForClient(paginationDto);
  }

  @Get('/getById/:id')
  getMenuById(@Param('id', ParseIntPipe) menuId: number) {
    return this.menusService.getMenuByIdClient(menuId);
  }
}
