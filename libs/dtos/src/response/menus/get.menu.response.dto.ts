import { Menus } from '@cnbc-monorepo/entity';

export class GetMenuResponseDto {
  statusCode: number;
  message: string;
  response?: Menus[];
  constructor(statusCode: number, message: string, response?: Menus[]) {
    this.statusCode = statusCode;
    this.message = message;
    this.response = response;
  }
}
