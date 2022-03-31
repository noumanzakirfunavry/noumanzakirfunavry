import { Menus } from '@cnbc-monorepo/entity';

export class CreateMenuResponseDto {
  statusCode: number;
  message: string;
  emailSubscriber?: Partial<Menus>;
  constructor(
    statusCode: number,
    message: string,
    emailSubscriber?: Partial<Menus>
  ) {
    this.statusCode = statusCode;
    this.message = message;
		if(emailSubscriber){
			this.emailSubscriber = emailSubscriber;
		}
  }
}
