import {
  CreateMarketRequestDto,
  CreateMarketResponseDto,
  GetAllMarketsResponseDto,
  GetMarketByIdResponseDto,
  UpdateMarketRequestDto,
  UpdateMarketResponseDto,
} from '@cnbc-monorepo/dtos';
import { Markets } from '@cnbc-monorepo/entity';
import {
  CustomException,
  Exceptions,
  ExceptionType,
} from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { FindOptions } from 'sequelize/types';

@Injectable()
export class MarketsService {
  constructor(
    @Inject('MARKETS_REPOSITORY')
    private marketsRepo: typeof Markets
  ) {}

  async create(
    createMarketRequestDto: CreateMarketRequestDto
  ): Promise<CreateMarketResponseDto> {
    let { orderNo } = createMarketRequestDto;
    let isOrderNoAvailable = true;

    // if orderNo is provided, then check if it is available
    if (orderNo) {
      isOrderNoAvailable = await this.isOrderNoAvailable({
        where: { orderNo },
      });
    } else {
      // if orderNo is not provided, choose a suitable orderNo
      orderNo = await this.findSuitableOrderNo({});
    }

    // if the provided orderNo is not available, throw exception
    if (!isOrderNoAvailable) {
      throw new CustomException(
        Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
        Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
      );
    }

    const market = await this.marketsRepo.create({
      ...createMarketRequestDto,
      orderNo,
    });

    return new CreateMarketResponseDto(
      HttpStatus.CREATED,
      'Market created successfully',
      market
    );
  }

  async update(
    marketId: number,
    updateMarketRequestDto: UpdateMarketRequestDto
  ): Promise<UpdateMarketResponseDto> {
    const { orderNo: newOrderNo } = updateMarketRequestDto;
    let oldOrderNo;
    let isOrderNoAvailable = true;

    const marketBeforeUpdate = await this.marketsRepo.findOne({
      where: { id: marketId },
      raw: true,
    });

    // check if market exists, if yes, get the old OrderNo
    if (marketBeforeUpdate) {
      oldOrderNo = marketBeforeUpdate.orderNo;
    } else {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    // if same orderNo has been provided as the original, throw exception
    if (newOrderNo === oldOrderNo) {
      throw new CustomException(
        Exceptions[ExceptionType.ORDER_NUMBER_IS_SAME_AS_BEFORE].message,
        Exceptions[ExceptionType.ORDER_NUMBER_IS_SAME_AS_BEFORE].status
      );
    }

    // check if the provided orderNo is available or occupied
    if (newOrderNo) {
      isOrderNoAvailable = await this.isOrderNoAvailable({
        where: { orderNo: newOrderNo },
      });
    }

    if (!isOrderNoAvailable) {
      throw new CustomException(
        Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].message,
        Exceptions[ExceptionType.ORDER_NUMBER_NOT_AVAILABLE].status
      );
    }

    await this.marketsRepo.update(
      { ...updateMarketRequestDto, orderNo: newOrderNo },
      { where: { id: marketId } }
    );

    return new UpdateMarketResponseDto(
      HttpStatus.OK,
      'Market updated successfully'
    );
  }

  async findAll(): Promise<GetAllMarketsResponseDto> {
    const markets: Markets[] = await this.marketsRepo.findAll();

    if (markets.length === 0) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    return new GetAllMarketsResponseDto(
      HttpStatus.OK,
      'Request Successful',
      markets
    );
  }

  async findOne(id: number): Promise<GetMarketByIdResponseDto> {
    const market = await this.marketsRepo.findOne({ where: { id } });

    if (!market) {
      throw new CustomException(
        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
      );
    }

    return new GetMarketByIdResponseDto(
      HttpStatus.OK,
      'Request Successful',
      market
    );
  }

  // find suitable order number for insertion
  async findSuitableOrderNo(
    findOptions: FindOptions<Markets>
  ): Promise<number> {
    // find orders corresponding to given parameters
    const orders = await this.marketsRepo.findAll<Markets>({
      ...findOptions,
      attributes: ['orderNo'],
      order: [['orderNo', 'DESC']],
      limit: 1,
      raw: true,
    });

    // add 1 to highest order number to generate new orderNo, or 0 if first one
    return orders[0] ? orders[0].orderNo + 1 : 0;
  }

  // find if a given orderNo is available or already occupied
  async isOrderNoAvailable(
    findOptions: FindOptions<Markets>
  ): Promise<boolean> {
    const order = await this.marketsRepo.findOne<Markets>(findOptions);

    // if orderNo available return true else return false
    return order ? false : true;
  }
}
