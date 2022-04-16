import { Markets } from '@cnbc-monorepo/entity';

export class CreateMarketResponseDto {
  statusCode: number;
  message: string;
  response: Markets;
  constructor(statusCode: number, message: string, response: Markets) {
    this.statusCode = statusCode;
    this.message = message;
    this.response = response;
  }
}
