import { Menus } from '@cnbc-monorepo/entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MenusService {
	constructor(
		@Inject('MENUS_REPOSITORY') private menusRepo: typeof Menus){}
}
