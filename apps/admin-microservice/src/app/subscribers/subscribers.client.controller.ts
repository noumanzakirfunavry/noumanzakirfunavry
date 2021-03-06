import {
	Public,
	SubscriberAuthGuard,
	SubscriberOnly
} from '@cnbc-monorepo/auth-module';
import {
	CreateSubscriberRequestDto,
	CreateSubscriberResponseDto,
	GetSubscriberByIdResponseDto,
	LoginSubscriberRequestDto,
	UpdateSubscriberRequestDto,
	UpdateSubscriberResponseDto
} from '@cnbc-monorepo/dtos';
import {
	Body,
	Controller,
	Get, Patch,
	Post,
	Req,
	UseGuards
} from '@nestjs/common';
import { SubscribersService } from './subscribers.service';

@Controller('admin/api/client/subscribers')
export class SubscribersClientController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Public()
  @Post('/login')
  loginSubscriber(
    @Body() loginSubscriberRequestDto: LoginSubscriberRequestDto
  ) {
    return this.subscribersService.loginSubscriber(loginSubscriberRequestDto);
  }

  @Public()
  @Post('/sign-up')
  addEmailSubscriber(
    @Body() createSubscriberRequestDto: CreateSubscriberRequestDto
  ): Promise<CreateSubscriberResponseDto> {
    return this.subscribersService.addEmailSubscriber(
      createSubscriberRequestDto
    );
  }

  @SubscriberOnly()
  @UseGuards(SubscriberAuthGuard)
  @Patch('/update-subscriber')
  updateEmailSubscriber(
    @Req() req,
    @Body() updateSubscriberRequestDto: UpdateSubscriberRequestDto
  ): Promise<UpdateSubscriberResponseDto> {
    return this.subscribersService.updateEmailSubscriber(
      req.user.subscriber.id,
      updateSubscriberRequestDto
    );
  }

  
  @SubscriberOnly()
  @UseGuards(SubscriberAuthGuard)
  @Get('/profile')
  getLoggedInSubscriberProfile(@Req() req): Promise<GetSubscriberByIdResponseDto> {
		console.log(req.user);
		
    return this.subscribersService.getSubscriberById(req.user.subscriber.id);
  }
}
