import {
  CreateMenuRequestDto,
  CreateMenuResponseDto,
  DeleteMenuResponseDto,
  GetMenuByIdResponseDto,
  GetMenuRequestDto,
  GetMenusResponseDto,
  UpdateMenuRequestDto,
  UpdateMenuResponseDto,
} from '@cnbc-monorepo/dtos';
import { ElkService } from '@cnbc-monorepo/elk';
import { Menus } from '@cnbc-monorepo/entity';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import e from 'express';
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
    const menus = await this.menusRepo.findAll<Menus>({
      where: {
        ...getMenuRequestDto,
        ...(getMenuRequestDto.title && {
          title: {
            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(
              getMenuRequestDto.title
            )}%`,
          },
        }),
      },
      include: [{ model: Menus, as: 'childMenus' }],
      // raw: true,
    });

    return new GetMenusResponseDto(HttpStatus.OK, 'Request Successful', menus);
  }

  async getMenusForClient(): Promise<GetMenusResponseDto> {
    const menus = await this.menusRepo.findAll<Menus>({
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
      return new GetMenuByIdResponseDto(
        HttpStatus.NOT_FOUND,
        'Menu was not found'
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
        return new CreateMenuResponseDto(
          HttpStatus.BAD_REQUEST,
          'Order Number not available, Please choose another or leave empty for auto assignment'
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
        return new CreateMenuResponseDto(
          HttpStatus.BAD_REQUEST,
          'Order Number not available, Please choose another or leave empty for auto assignment'
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
      return new UpdateMenuResponseDto(
        HttpStatus.NOT_FOUND,
        'Menu was not found.'
      );
    }

    // if update values are same as original then return error
    if (parentMenuId === menu?.parentMenuId || orderNo === menu?.orderNo) {
      return new UpdateMenuResponseDto(
        HttpStatus.BAD_REQUEST,
        'Provided orderNumber and/or parentMenuId is same as original. Kindly provide other values or leave empty if dont want to update'
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
        return new UpdateMenuResponseDto(
          HttpStatus.BAD_REQUEST,
          'Order Number not available, Please choose another or leave empty for auto assignment'
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
        return new UpdateMenuResponseDto(
          HttpStatus.BAD_REQUEST,
          'Order Number not available, Please choose another or leave empty if you dont want to update.'
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
      return new DeleteMenuResponseDto(
        HttpStatus.BAD_REQUEST,
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
