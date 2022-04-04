import {
  CreateMenuRequestDto,
  CreateMenuResponseDto,
  DeleteMenuRequestDto,
  DeleteMenuResponseDto,
  GetMenuRequestDto,
  GetMenuResponseDto,
  UpdateMenuRequestDto,
  UpdateMenuResponseDto,
} from '@cnbc-monorepo/dtos';
import { Menus } from '@cnbc-monorepo/entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/admin/menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get('/getAll')
  getMenus(
    @Query() getMenuRequestDto: GetMenuRequestDto
  ): Promise<GetMenuResponseDto> {
    return this.menusService.getMenus(getMenuRequestDto);
  }

  @Post('/create')
  createMenu(
    @Body() createMenuRequestDto: CreateMenuRequestDto,
    @Req() req
  ): Promise<CreateMenuResponseDto> {
    return this.menusService.createMenu(createMenuRequestDto, req.user.data.id);
  }

  @Patch('/update')
  updateMenu(
    @Body() updateMenuRequestDto: UpdateMenuRequestDto
  ): Promise<UpdateMenuResponseDto> {
    return this.menusService.updateMenu(updateMenuRequestDto);
  }

  @Delete('/delete')
  deleteMenus(
    @Query() deleteMenuRequestDto: DeleteMenuRequestDto
  ): Promise<DeleteMenuResponseDto> {
    return this.menusService.deleteMenus(deleteMenuRequestDto.id);

    // return body
  }

  // @Delete('/:id')
  // deleteMenu(@Param('id', ParseIntPipe) menuId: number, @Req() req){
  // 	return this.menusService.deleteMenu(menuId, req.user.data.id)
  // }
}
