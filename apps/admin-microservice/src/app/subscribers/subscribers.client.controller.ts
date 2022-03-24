import { Public } from '@cnbc-monorepo/auth-module';
import {
  CreateSubscriberRequestDto,
  CreateSubscriberResponseDto,
  GetSubscriberByIdResponseDto,
} from '@cnbc-monorepo/dtos';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SubscribersService } from './subscribers.service';

@Controller('admin/api/client/subscribers')
export class SubscribersClientController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Public()
  @Post('/sign-up')
  addEmailSubscriber(
    @Body() createSubscriberRequestDto: CreateSubscriberRequestDto
  ): Promise<CreateSubscriberResponseDto> {
    return this.subscribersService.addEmailSubscriber(
      createSubscriberRequestDto
    );
  }

  @Public()
  @Get('/:subscriberId')
  getSubscriberById(
    @Param('subscriberId', ParseIntPipe) subscriberId: number
  ): Promise<GetSubscriberByIdResponseDto> {
    return this.subscribersService.getSubscriberById(subscriberId);
  }
}