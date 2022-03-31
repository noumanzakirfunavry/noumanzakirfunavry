import { CreateMenuRequestDto, CreateMenuResponseDto } from '@cnbc-monorepo/dtos';
import { Menus } from '@cnbc-monorepo/entity';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FindOptions } from 'sequelize/types';

@Injectable()
export class MenusService {
	constructor(
		@Inject('MENUS_REPOSITORY') private menusRepo: typeof Menus){}

		async createMenu(createMenuRequestDto: CreateMenuRequestDto, userId: number){
			let {parentMenuId, orderNo} = createMenuRequestDto;
			let isOrderNoAvailable = true

			// case: if parentMenuId is not provided (it means it will be main menu)
			if(parentMenuId===undefined){
				if(orderNo){
					// if orderNo provided then check if available
					isOrderNoAvailable = await this.isOrderNoAvailable({ where: {parentMenuId: null, orderNo}, plain:true })
				} else {
					// if orderNo not provided, find a available orderNo
					orderNo = await this.findSuitableOrderNo({where: { parentMenuId: null }});
				}

				if(isOrderNoAvailable){
					const menu = await this.menusRepo.create<Menus>({...createMenuRequestDto, orderNo, publishedBy: userId})
					return new CreateMenuResponseDto(HttpStatus.CREATED, 'Menu created successfully', menu)
				} else {
					return new CreateMenuResponseDto(HttpStatus.BAD_REQUEST, 'Order Number not available, Please choose another or leave empty for auto assignment')
				}
			
			// case: if orderNo not provided  but parentMenuId provided
			} else if(orderNo === undefined){
				// find a suitable orderNo
				orderNo = await this.findSuitableOrderNo({ where: { parentMenuId } });

				const menu = await this.menusRepo.create<Menus>({...createMenuRequestDto, orderNo, publishedBy: userId });
				return new CreateMenuResponseDto(HttpStatus.CREATED, 'Menu created successfully', menu)

			// if both parentMenuId and orderNo provided
			} else {
				// check if orderNo available
				const isOrderNoAvailable = await this.isOrderNoAvailable({ where: {parentMenuId, orderNo}, plain: true });

				if(isOrderNoAvailable){
					const menu = await this.menusRepo.create<Menus>({ ...createMenuRequestDto, parentMenuId, orderNo, publishedBy: userId });
					return new CreateMenuResponseDto(HttpStatus.CREATED, 'Menu created successfully', menu)
				} else {
					return new CreateMenuResponseDto(HttpStatus.BAD_REQUEST, 'Order Number not available, Please choose another or leave empty for auto assignment')
				}
			}
		}

		// find suitable order number for insertion
		async findSuitableOrderNo(where: FindOptions<Menus>): Promise<number> {
			// find orders corresponding to given parameters
			const orders = await this.menusRepo.findAll<Menus>({...where, attributes:['orderNo'], order: [['orderNo','DESC']], limit:1, raw: true});
			
			// add 1 to highest order number to generate new orderNo, or 0 if first one
			return orders[0] ? orders[0].orderNo + 1 : 0
		}

		// find if a given orderNo is available or already occupied
		async isOrderNoAvailable(findOptions: FindOptions<Menus>): Promise<boolean> {
			const order = await this.menusRepo.findOne<Menus>(findOptions);

			// if orderNo available return true else return false
			return order ? false : true;
			
		}
		
}
