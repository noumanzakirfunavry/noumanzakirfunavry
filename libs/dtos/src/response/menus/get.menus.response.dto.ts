import { Menus } from '@cnbc-monorepo/entity';

export class GetMenusResponseDto {
  statusCode: number;
  message: string;
  response?: Menus[];
  constructor(statusCode: number, message: string, response?: Menus[]) {
    this.statusCode = statusCode;
    this.message = message;
    this.response = response;
  }
}
