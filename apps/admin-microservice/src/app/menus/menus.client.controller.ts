import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/client/menus')
export class MenusClientController {
  constructor(private readonly menusService: MenusService) {}

  @Get('/getAll')
  getAllMenus() {
    return this.menusService.getMenusForClient();
  }

  @Get('/getById/:id')
  getMenuById(@Param('id', ParseIntPipe) menuId: number) {
    return this.menusService.getMenuById(menuId);
  }
}
