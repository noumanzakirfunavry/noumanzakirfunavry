import {
	CreateMenuRequestDto,
	CreateMenuResponseDto,
	DeleteMenuResponseDto,
	GetMenuByIdResponseDto,
	GetMenuRequestDto,
	GetMenusResponseDto,
	PaginatedRequestDto,
	UpdateMenuRequestDto,
	UpdateMenuResponseDto
} from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { Menus } from '@cnbc-monorepo/entity';
import {
	CustomException,
	Exceptions,
	ExceptionType
} from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import {
	BadRequestException,
	HttpStatus,
	Inject,
	Injectable
} from '@nestjs/common';
import { Op } from 'sequelize';
import { FindOptions } from 'sequelize/types';

@Injectable()
export class MenusService {
  constructor(
    @Inject('MENUS_REPOSITORY') private menusRepo: typeof Menus,
    private helperService: Helper
  ) {}

  async getMenus(
    getMenuRequestDto: GetMenuRequestDto
  ): Promise<GetMenusResponseDto> {
		const {limit, pageNo, ...where} = getMenuRequestDto
    console.log("🚀 ~ file: menus.service.ts ~ line 40 ~ MenusService ~ where", where)
		

    const menus = await this.menusRepo.findAll<Menus>({
			limit: parseInt(limit.toString()),
			offset: this.helperService.offsetCalculator(pageNo, limit),
      where: {
        ...where,
        ...(where.title && {
          title: {
            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(
              where.title
            )}%`,
          },
        }),
      },
      include: [{ model: Menus, as: 'childMenus' }],
      // raw: true,
    });

    return new GetMenusResponseDto(HttpStatus.OK, 'Request Successful', menus);
  }

  async getMenusForClient(paginationDto: PaginatedRequestDto): Promise<GetMenusResponseDto> {
		const {limit, pageNo} = paginationDto;
    

		const menus = await this.menusRepo.findAll<Menus>({
			limit: parseInt(limit.toString()),
			offset: this.helperService.offsetCalculator(pageNo, limit),
      where: {
        isActive: true,
        parentMenuId: null,
      },
      include: [
        {
          model: Menus,
          as: 'childMenus',
          where: {
            isActive: true,
          },
          required: false,
        },
      ],
    });

    return new GetMenusResponseDto(HttpStatus.OK, 'Request Successfull', menus);
  }

  async getMenuById(menuId: number) {
    const menu = await this.menusRepo.findOne({ where: { id: menuId } });
    if (!menu) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    return new GetMenuByIdResponseDto(
      HttpStatus.OK,
      'Request successful',
      menu
    );
  }

  async createMenu(
    createMenuRequestDto: CreateMenuRequestDto,
    userId: number
  ): Promise<CreateMenuResponseDto> {
    let { parentMenuId, orderNo } = createMenuRequestDto;
    let isOrderNoAvailable = true;

    // case: if parentMenuId is not provided (it means it will be main menu)
    if (parentMenuId === undefined) {
      if (orderNo) {
        // if orderNo provided then check if available
        isOrderNoAvailable = await this.isOrderNoAvailable({
          where: { parentMenuId: null, orderNo },
          plain: true,
        });
      } else {
        // if orderNo not provided, find a available orderNo
        orderNo = await this.findSuitableOrderNo({
          where: { parentMenuId: null },
        });
      }

      if (isOrderNoAvailable) {
        const menu = await this.menusRepo.create<Menus>({
          ...createMenuRequestDto,
          orderNo,
          publishedBy: userId,
        });
        return new CreateMenuResponseDto(
          HttpStatus.CREATED,
          'Menu created successfully',
          menu
        );
      } else {
        throw new CustomException(
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
        );
      }

      // case: if orderNo not provided  but parentMenuId provided
    } else if (orderNo === undefined) {
      // find a suitable orderNo
      orderNo = await this.findSuitableOrderNo({ where: { parentMenuId } });

      const menu = await this.menusRepo.create<Menus>({
        ...createMenuRequestDto,
        orderNo,
        publishedBy: userId,
      });
      return new CreateMenuResponseDto(
        HttpStatus.CREATED,
        'Menu created successfully',
        menu
      );

      // if both parentMenuId and orderNo provided
    } else {
      // check if orderNo available
      const isOrderNoAvailable = await this.isOrderNoAvailable({
        where: { parentMenuId, orderNo },
        plain: true,
      });

      if (isOrderNoAvailable) {
        const menu = await this.menusRepo.create<Menus>({
          ...createMenuRequestDto,
          parentMenuId,
          orderNo,
          publishedBy: userId,
        });
        return new CreateMenuResponseDto(
          HttpStatus.CREATED,
          'Menu created successfully',
          menu
        );
      } else {
        throw new CustomException(
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
        );
      }
    }
  }

  async updateMenu(
    updateMenuRequestDto: UpdateMenuRequestDto
  ): Promise<UpdateMenuResponseDto> {
    let { id, orderNo, parentMenuId } = updateMenuRequestDto;
    let isOrderNoAvailable = true;

    const menu = await this.menusRepo.findOne({
      where: { id },
      include: [{ model: Menus, as: 'childMenus' }],
    });

    // check if menu was found or not
    if (!menu) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    // if update values are same as original then return error
    if (parentMenuId === menu?.parentMenuId || orderNo === menu?.orderNo) {
      throw new CustomException(
        Exceptions[
          ExceptionType.ORDER_NUMBER_OR_PARENT_ID_SAME_AS_ORIGINAL
        ].message,
        Exceptions[
          ExceptionType.ORDER_NUMBER_OR_PARENT_ID_SAME_AS_ORIGINAL
        ].status
      );
    }

    // case: if parentMenuId is not provided (it means it will be main menu)
    if (parentMenuId === undefined) {
      if (orderNo) {
        // if orderNo provided then check if available
        isOrderNoAvailable = await this.isOrderNoAvailable({
          where: { parentMenuId: null, orderNo },
          plain: true,
        });
      }

      if (isOrderNoAvailable) {
        await this.menusRepo.update<Menus>(
          {
            ...updateMenuRequestDto,
            orderNo,
          },
          { where: { id } }
        );
        return new UpdateMenuResponseDto(
          HttpStatus.CREATED,
          'Menu updated successfully'
        );
      } else {
        throw new CustomException(
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
        );
      }

      // case: if orderNo not provided  but parentMenuId provided
    } else if (orderNo === undefined) {
      // find a suitable orderNo
      orderNo = await this.findSuitableOrderNo({ where: { parentMenuId } });

      await this.menusRepo.update<Menus>(
        {
          ...updateMenuRequestDto,
          orderNo,
          parentMenuId,
        },
        { where: { id } }
      );
      return new UpdateMenuResponseDto(
        HttpStatus.CREATED,
        'Menu created successfully'
      );

      // if both parentMenuId and orderNo provided
    } else {
      // check if orderNo available
      const isOrderNoAvailable = await this.isOrderNoAvailable({
        where: { parentMenuId, orderNo },
        plain: true,
      });

      if (isOrderNoAvailable) {
        await this.menusRepo.update<Menus>(
          {
            ...updateMenuRequestDto,
            parentMenuId,
            orderNo,
          },
          { where: { id } }
        );
        return new UpdateMenuResponseDto(
          HttpStatus.CREATED,
          'Menu updated successfully'
        );
      } else {
        throw new CustomException(
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
          Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
        );
      }
    }
  }

  async deleteMenus(id: number[]): Promise<DeleteMenuResponseDto> {
    const originalId = id;

    // find the menus
    const menus = await this.menusRepo.findAll({
      where: { id },
      include: [{ model: Menus, as: 'childMenus' }],
    });

    // check if any of the menus have childMenus, if yes, then dont allow delete
    menus.forEach((menu) => {
      if (menu.childMenus.length > 0) {
        id = id.filter((item) => {
          if (item != menu.id) {
            return item;
          }
        });
      }
    });

    // if menus having children have been found, return unsuccessful reponse with their ids
    if (id.length !== originalId.length) {
      id = id
        .filter((x) => !originalId.includes(x))
        .concat(originalId.filter((x) => !id.includes(x)));
      throw new BadRequestException(
        `Menu(s) with ID: ${id.join(
          ', '
        )} contain child menus and cannot be deleted.`
      );
    }

    const deletedNumber = await this.menusRepo.destroy<Menus>({
      where: { id },
    });

    // if not all menus were deleted then they are not found
    if (deletedNumber !== id.length) {
      return new DeleteMenuResponseDto(
        HttpStatus.OK,
        `${deletedNumber} menus were deleted. ${
          id.length - deletedNumber
        } menu(s) were not found.`
      );
    }
    return new DeleteMenuResponseDto(
      HttpStatus.OK,
      `${deletedNumber} menu(s) deleted successfully.`
    );
  }

  async elkSearch(searchObj) {
    let result: any = (
      await ElkService.search({
        index: searchObj.index,
        size: 100,
        query: { match: searchObj.match },
      })
    ).map((item) => item._source as Menus);
    console.time('Filling Parent Menu');
    // result = await Promise.all(
    //   result.map(async (menu) => {
    //     if (menu.parentMenuId) {
    //       const pMenu = await this.menusRepo.findOne({
    //         where: { id: menu.parentMenuId },
    //         raw: true,
    //       });
    //       menu.parent = pMenu;
    //     }
    //     return menu;
    //   })
    // );

    // //////////////////////////////////////
    const ids: any[] = [
      ...new Set(
        result
          .filter((item) => item.parentMenuId != null)
          .map((element) => element.parentMenuId)
      ),
    ];

    const menus = await this.menusRepo.findAll({
      where: { id: ids },
      raw: true,
    });
    const parentMenuObject = {};
    menus.forEach((menu) => {
      parentMenuObject[menu.id] = menu;
    });

    result
      .filter((menu) => menu.parentMenuId != null)
      .forEach((menu) => {
        menu.parent = parentMenuObject[menu.parentMenuId];
      });

    return result;
  }

  // find suitable order number for insertion
  async findSuitableOrderNo(where: FindOptions<Menus>): Promise<number> {
    // find orders corresponding to given parameters
    const orders = await this.menusRepo.findAll<Menus>({
      ...where,
      attributes: ['orderNo'],
      order: [['orderNo', 'DESC']],
      limit: 1,
      raw: true,
    });

    // add 1 to highest order number to generate new orderNo, or 0 if first one
    return orders[0] ? orders[0].orderNo + 1 : 0;
  }

  // find if a given orderNo is available or already occupied
  async isOrderNoAvailable(findOptions: FindOptions<Menus>): Promise<boolean> {
    const order = await this.menusRepo.findOne<Menus>(findOptions);

    // if orderNo available return true else return false
    return order ? false : true;
  }
}
