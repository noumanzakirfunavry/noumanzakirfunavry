import { Public } from '@cnbc-monorepo/auth-module';
import {
  CreateSubscriberRequestDto,
  CreateSubscriberResponseDto,
} from '@cnbc-monorepo/dtos';
import { Body, Controller, Post } from '@nestjs/common';
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
}
