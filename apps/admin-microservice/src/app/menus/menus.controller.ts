import {
	CreateMenuRequestDto,
	CreateMenuResponseDto,
	DeleteMenuRequestDto,
	DeleteMenuResponseDto,
	GetMenuByIdResponseDto,
	GetMenuRequestDto,
	GetMenusResponseDto,
	UpdateMenuRequestDto,
	UpdateMenuResponseDto,
	UpdateOrderMenusRequestDto
} from '@cnbc-monorepo/dtos';
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe, Post,
	Put,
	Query,
	Req
} from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/admin/menus')
export class MenusController {
	constructor(
		private readonly menusService: MenusService,
	) { }

	@Get('/getAll')
	getMenus(
		@Query() getMenuRequestDto: GetMenuRequestDto
	): Promise<GetMenusResponseDto> {
		return this.menusService.getMenus(getMenuRequestDto);
	}

	@Get('/getById/:id')
	getMenuById(@Param('id', ParseIntPipe) menuId: number): Promise<GetMenuByIdResponseDto> {
		return this.menusService.getMenuById(menuId);
	}

	@Post('/create')
	createMenu(
		@Body() createMenuRequestDto: CreateMenuRequestDto,
		@Req() req
	): Promise<CreateMenuResponseDto> {
		return this.menusService.createMenu(createMenuRequestDto, req.user.data.id);
	}

	@Put('/update/:id')
	updateMenu(
		@Param('id', ParseIntPipe) menuId: number,
		@Body() updateMenuRequestDto: UpdateMenuRequestDto
	): Promise<UpdateMenuResponseDto> {
		return this.menusService.updateMenu(menuId, updateMenuRequestDto);
	}

	@Put('/updateOrder')
	updateOrderNumber(@Body() body: UpdateOrderMenusRequestDto): Promise<UpdateMenuResponseDto> {
		return this.menusService.updateOrderNumber(body);
	}

	@Delete('/delete')
	deleteMenus(
		@Query() deleteMenuRequestDto: DeleteMenuRequestDto
	): Promise<DeleteMenuResponseDto> {
		return this.menusService.deleteMenus(deleteMenuRequestDto.id);
	}
}
