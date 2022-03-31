import {
  CreateMenuRequestDto,
  DeleteMenuRequestDto,
  GetMenuRequestDto,
} from '@cnbc-monorepo/dtos';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/admin/menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get('getAll')
  getMenus(@Query() getMenuRequestDto: GetMenuRequestDto) {
		return this.menusService.getMenus(getMenuRequestDto);
  }

  @Post('create')
  createMenu(@Body() createMenuRequestDto: CreateMenuRequestDto, @Req() req) {
    return this.menusService.createMenu(createMenuRequestDto, req.user.data.id);
  }

  @Delete('delete')
  deleteMenus(@Query() deleteMenuRequestDto: DeleteMenuRequestDto) {
    return this.menusService.deleteMenus(deleteMenuRequestDto.id);

    // return body
  }

  // @Delete('/:id')
  // deleteMenu(@Param('id', ParseIntPipe) menuId: number, @Req() req){
  // 	return this.menusService.deleteMenu(menuId, req.user.data.id)
  // }
}
