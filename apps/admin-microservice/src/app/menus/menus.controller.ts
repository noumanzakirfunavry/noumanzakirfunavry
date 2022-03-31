import { CreateMenuRequestDto } from '@cnbc-monorepo/dtos';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/admin/menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

	@Post()
	createMenu(@Body() createMenuRequestDto: CreateMenuRequestDto, @Req() req){		
		return this.menusService.createMenu(createMenuRequestDto, req.user.data.id);
	}
}
