import { PaginatedRequestDto } from '@cnbc-monorepo/dtos';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/client/menus')
export class MenusClientController {
  constructor(private readonly menusService: MenusService) {}

  @Get('/getAll')
  getAllMenus(paginationDto: PaginatedRequestDto) {
    return this.menusService.getMenusForClient(paginationDto);
  }

  @Get('/getById/:id')
  getMenuById(@Param('id', ParseIntPipe) menuId: number) {
    return this.menusService.getMenuById(menuId);
  }
}
