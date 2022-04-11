import { Menus } from '@cnbc-monorepo/entity';

export class CreateMenuResponseDto {
  statusCode: number;
  message: string;
  response?: Partial<Menus>;
  constructor(
    statusCode: number,
    message: string,
    response?: Partial<Menus>
  ) {
    this.statusCode = statusCode;
    this.message = message;
		if(response){
			this.response = response;
		}
  }
}
