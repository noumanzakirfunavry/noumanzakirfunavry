import { Controller } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers/admin')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}
}
