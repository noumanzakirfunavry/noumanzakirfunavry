import { Controller } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('admin/api/client/menus')
export class MenusClientController {
  constructor(private readonly menusService: MenusService) {}
	
}
